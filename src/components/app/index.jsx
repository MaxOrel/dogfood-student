import { useState, useEffect } from "react";
import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
import { Sort } from "../sort";
import { Logo } from "../logo";
import { Search } from "../search";
import { dataCard } from "../../data";
import s from "./styles.module.css";
import { Button } from '../button';
// import styled from 'styled-components';
import api from '../../utils/api';
import { useDebounce } from '../../hooks/useDebounce';
import { isLiked } from '../../utils/products';
import { CatalogPage } from '../../pages/catalog-page';
import { ProductPage } from '../../pages/product-page';
import FaqPage from '../../pages/faq-page';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotFoundPage } from '../../pages/not-found-page';
import { UserContext } from '../../contexts/current-user-context';
import { CardsContext } from '../../contexts/card-context';
import { ThemeContext, themes } from '../../contexts/theme-context';
import { FavoritesPage } from '../../pages/favorite-page';
import { TABS_ID } from '../../utils/constants';
import Modal from '../modal';
import Register from '../register';
import Login from '../login';
import ResetPassword from '../reset-password';
import DnDPage from '../../pages/dnd-page';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeLikeProduct, fetchProducts, sortedProducts } from '../../storage/products/products-slice';
import { checkTokenUser, fetchUser, loginUser, registerUser } from '../../storage/user/user-slice';
import { MainPage } from '../../pages/main-page';
import { ProtectedRoute } from '../protected-route';
import { getLocalData } from '../../utils/localStorage';
import CartPage from '../../pages/cart-page';

export function App() {
    const currentUser = useSelector(state => state.user.data)

    const [searchQuery, setSearchQuery] = useState("");

    const [theme, setTheme] = useState(themes.light);
    const dispatch = useDispatch();


    const [contacts, setContacts] = useState([])
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

    function handleFormSubmit(e) {
        e.preventDefault();
        handleRequest();
    }

    function handleInputChange(dataInput) {
        setSearchQuery(dataInput);
    }

    function handleUpdateUser(dataUserUpdate) {
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

    function addContact(dataInfo) {
        setContacts([...contacts, dataInfo])
    }

    const cbSubmitFormLoginRegister = (dataForm) => {
        console.log('cbSubmitFormLoginRegister', dataForm);
        dispatch(registerUser(dataForm))
    }
    const cbSubmitFormLogin = (dataForm) => {
        console.log('cbSubmitFormLogin', dataForm);
        dispatch(loginUser(dataForm))
    }
    const cbSubmitFormResetPassword = (dataForm) => {
        console.log('cbSubmitFormResetPassword', dataForm);
    }

    const handleClickButtonLogin = (e) => {
        e.preventDefault();
        navigate('/login', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonReset = (e) => {
        e.preventDefault();
        navigate('/reset-password', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonRegister = (e) => {
        e.preventDefault();
        navigate('/register', { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    const handleClickButtonResetNotModal = (e) => {
        e.preventDefault();
        navigate('/reset-password')
    }
    const handleClickButtonRegisterNotModal = (e) => {
        e.preventDefault();
        navigate('/register')
    }
    const handleClickButtonLoginNotModal = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header>
                <Routes location={(backgroundLocation && { ...backgroundLocation, pathname: initialPath }) || location}>
                    <Route path='/' element={
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
            <main className="content container" style={{ backgroundColor: theme.background }}>
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
                    <Route path='/cart' element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    } />
                    <Route path='/dnd' element={<DnDPage />} />
                    <Route path='/login' element={
                        <ProtectedRoute onlyUnAuth><Login onSubmit={cbSubmitFormLogin} onNavigateRegister={handleClickButtonRegisterNotModal} onNavigateReset={handleClickButtonResetNotModal} /></ProtectedRoute>
                    } />
                    <Route path='/register' element={
                        <ProtectedRoute onlyUnAuth><Register onSubmit={cbSubmitFormLoginRegister} onNavigateLogin={handleClickButtonLoginNotModal} /></ProtectedRoute>
                    } />
                    <Route path='/reset-password' element={
                        <ProtectedRoute onlyUnAuth><ResetPassword onSubmit={cbSubmitFormResetPassword} /></ProtectedRoute>
                    } />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
            {backgroundLocation && <Routes>
                <Route path='/login' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <Login onSubmit={cbSubmitFormLogin} onNavigateRegister={handleClickButtonRegister} onNavigateReset={handleClickButtonReset} />
                        </Modal>
                    </ProtectedRoute>
                } />
                <Route path='/register' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <Register onSubmit={cbSubmitFormLoginRegister} onNavigateLogin={handleClickButtonLogin} />
                        </Modal>
                    </ProtectedRoute>
                } />
                <Route path='/reset-password' element={
                    <ProtectedRoute onlyUnAuth>
                        <Modal isOpen onClose={onCloseRoutingModal}>
                            <ResetPassword onSubmit={cbSubmitFormResetPassword} />
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
