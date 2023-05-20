import { Link, useLocation } from 'react-router-dom';
import { ContentHeader } from '../../components/content-header';

export const MainPage = () => {
    const location = useLocation()

    return (
        <>
            <ContentHeader title="Главная страница" />
            <div>
                <Link to="/catalog">Перейти</Link>
            </div>
            <div>
                <Link to='/dnd' state={{ backgroundLocation: location, initialPath: location.pathname }}>
                    Открыть защищенную страницу
                </Link>
            </div>


        </>
    )
}