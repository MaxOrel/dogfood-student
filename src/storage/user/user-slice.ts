import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalData } from '../../utils/localStorage';
import { createAppAsyncThunk } from '../hook';
import { TUserResponseDto, UserAuthBodyDto, UserBodyDto, UserRegisterBodyDto } from '../../utils/api';
import { getActionName, isActionPending, isActionRejected } from '../../utils/redux';


type TUserState = {
    isAuthChecked: boolean,
    data: TUserResponseDto | null,
    registerUserRequest: boolean,
    registerUserError: SerializedError | null | unknown,
    loginUserRequest: boolean,
    loginUserError: SerializedError | null | unknown,
    checkTokenUserRequest: boolean,
    checkTokenUserError: SerializedError | null | unknown,
    editedUserRequest: boolean,
    editedUserError: SerializedError | null | unknown,
}

const initialState: TUserState = {
    isAuthChecked: false,
    data: null,

    registerUserRequest: false,
    registerUserError: null,

    loginUserRequest: false,
    loginUserError: null,

    checkTokenUserRequest: false,
    checkTokenUserError: null,

    editedUserRequest: false,
    editedUserError: null,


}

export const sliceName = 'user';

export const registerUser = createAppAsyncThunk<TUserResponseDto, UserRegisterBodyDto>(
    `${sliceName}/registerUser`,
    async function (dataUser, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.register(dataUser);
            return fulfillWithValue(data);
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const loginUser = createAppAsyncThunk<TUserResponseDto, UserAuthBodyDto>(
    `${sliceName}/loginUser`,
    async function (dataUser, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.authorize(dataUser);
            if (data.token) {
                setLocalData('token', data.token);
                return fulfillWithValue(data.data);
            } else {
                return rejectWithValue(data)
            }
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const editedUser = createAppAsyncThunk<TUserResponseDto, UserBodyDto>(
    `${sliceName}/editedUser`,
    async function (dataUser, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.setUserInfo(dataUser);
            if (data.name) {
                return fulfillWithValue(data);
            } else {
                return rejectWithValue(data)
            }
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const checkTokenUser = createAppAsyncThunk<TUserResponseDto, string>(
    `${sliceName}/checkTokenUser`,
    async function (token, { fulfillWithValue, rejectWithValue, extra: api, dispatch }) {
        try {
            const data = await api.checkToken(token);
            return fulfillWithValue(data);
        }
        catch (err) {
            return rejectWithValue(err)
        }
        finally {
            dispatch(authCheck())
        }
    }
)

const userSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        authCheck: (state) => {
            state.isAuthChecked = true;
        },
        logout: (state) => {
            state.data = null;
            setLocalData('token', null)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.registerUserRequest = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loginUserRequest = false;
            })
            .addCase(checkTokenUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.checkTokenUserRequest = false;
            })
            .addCase(editedUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.editedUserRequest = false;
            })

            .addMatcher(isActionPending, (state, action) => {
                state = { ...state, [`${getActionName(action.type)}Request`]: true };
                state = { ...state, [`${getActionName(action.type)}Error`]: null };
            })
            .addMatcher(isActionRejected, (state, action) => {
                state = { ...state, [`${getActionName(action.type)}Request`]: false };
                state = { ...state, [`${getActionName(action.type)}Error`]: action.payload };
            })

    }
})

export const { authCheck, logout } = userSlice.actions;

export default userSlice.reducer;