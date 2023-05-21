import { useState, useEffect, SyntheticEvent, MouseEvent, FormEvent } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Logo } from "../logo";
import { Search } from "../search";
import api, { UserBodyDto } from '../../utils/api';
import { useDebounce } from '../../hooks/useDebounce';
import { CatalogPage } from '../../pages/catalog-page';
import { ProductPage } from '../../pages/product-page';
import FaqPage from '../../pages/faq-page';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotFoundPage } from '../../pages/not-found-page';
import { ThemeContext, themes } from '../../contexts/theme-context';
import { FavoritesPage } from '../../pages/favorite-page';
import Modal from '../modal';
import Register from '../register';
import Login from '../login';
import ResetPassword from '../reset-password';
import DnDPage from '../../pages/dnd-page';
import { fetchProducts } from '../../storage/products/products-slice';
import { checkTokenUser } from '../../storage/user/user-slice';
import { MainPage } from '../../pages/main-page';
import { ProtectedRoute } from '../protected-route';
import { getLocalData } from '../../utils/localStorage';
import CartPage from '../../pages/cart-page';
import { useAppDispath, useAppSelector } from '../../storage/hook';
import { ProfilePage } from '../../pages/profile-page';
import { ProfileInfo } from '../profile-info';
import ProfileForm from '../profile-form';

export function App() {
    const currentUser = useAppSelector(state => state.user.data)

    const [searchQuery, setSearchQuery] = useState("");

    const [theme, setTheme] = useState(themes.light);
    const dispatch = useAppDispath();

    const debounceSearchQuery = useDebounce(searchQuery, 300);

    const navigate = useNavigate();

    const location = useLocation();

    const backgroundLocation = location.state?.backgroundLocation;
    const initialPath = location.state?.initialPath;



    const onCloseRoutingModal = () => {
        navigate(initialPath || '/', { replace: true })
    }


    function handleRequest() {
        // const filterCards = dataCard.filter((item) =>
        //   item.name.includes(searchQuery)
        // );
        // setCards(filterCards);

        api.search(debounceSearchQuery)
            .then((dataSearch) => {
                // setCards(dataSearch);
            })
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleRequest();
    }

    function handleInputChange(dataInput: string) {
        setSearchQuery(dataInput);
    }

    function handleUpdateUser(dataUserUpdate: UserBodyDto) {
        api.setUserInfo(dataUserUpdate)
            .then((updateUserFromServer) => {
                // setCurrentUser(updateUserFromServer)
            })
    }

    useEffect(() => {
        handleRequest();
    }, [debounceSearchQuery]);

    const token = getLocalData('token')

    useEffect(() => {
        dispatch(checkTokenUser(token))
            .then(() => {
                if (token) {
                    console.log(currentUser);
                    dispatch(fetchProducts())
                }
            })
    }, [dispatch, token])


    function toggleTheme() {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    }


    const handleClickButtonLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/login', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonReset = (e: MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        navigate('/reset-password', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonRegister = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/register', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonResetNotModal = (e: MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        navigate('/reset-password')
    }
    const handleClickButtonRegisterNotModal = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/register')
    }
    const handleClickButtonLoginNotModal = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header>
                <Routes location={(backgroundLocation && { ...backgroundLocation, pathname: initialPath }) || location}>
                    <Route path='/catalog' element={
                        <>
                            <Logo />
                            <Search
                                handleFormSubmit={handleFormSubmit}
                                handleInputChange={handleInputChange}
                            />
                        </>
                    } />
                    <Route path='*' element={<Logo href="/" />} />
                </Routes>
            </Header>
            <main className="main" style={{ backgroundColor: theme.background }}>
                <Routes location={(backgroundLocation && { ...backgroundLocation, pathname: initialPath }) || location}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/catalog' element={
                        <ProtectedRoute>
                            <CatalogPage />
                        </ProtectedRoute>
                    } />
                    <Route path='/favorites' element={<FavoritesPage />} />
                    <Route path='/faq' element={<FaqPage />} />
                    <Route path='/product/:productID' element={
                        <ProtectedRoute>
                            <ProductPage />
                        </ProtectedRoute>
                    } />
                    <Route path='/profile' element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } >
                        <Route index element={<ProfileInfo />} />
                        <Route path='edit' element={<ProfileForm />} />
                    </Route>
                    <Route path='/cart' element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    } />
                    <Route path='/dnd' element={<DnDPage />} />
                    <Route path='/login' element={
                        <ProtectedRoute onlyUnAuth><Login onNavigateRegister={handleClickButtonRegisterNotModal} onNavigateReset={handleClickButtonResetNotModal} /></ProtectedRoute>
                    } />
                    <Route path='/register' element={
                        <ProtectedRoute onlyUnAuth><Register onNavigateLogin={handleClickButtonLoginNotModal} /></ProtectedRoute>
                    } />
                    <Route path='/reset-password' element={
                        <ProtectedRoute onlyUnAuth><ResetPassword /></ProtectedRoute>
                    } />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
            {backgroundLocation && <Routes>
                <Route path='/login' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <Login onNavigateRegister={handleClickButtonRegister} onNavigateReset={handleClickButtonReset} />
                        </Modal>
                    </ProtectedRoute>
                } />
                <Route path='/register' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <Register onNavigateLogin={handleClickButtonLogin} />
                        </Modal>
                    </ProtectedRoute>
                } />
                <Route path='/reset-password' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <ResetPassword />
                        </Modal>
                    </ProtectedRoute>
                } />

                <Route path='/dnd' element={
                    <ProtectedRoute>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <DnDPage />
                        </Modal>
                    </ProtectedRoute>
                } />
            </Routes>}
        </ThemeContext.Provider >
    );
}
