import { Outlet } from 'react-router-dom';
import ProfileForm from '../../components/profile-form';
import { ProfileInfo } from '../../components/profile-info';
import { useAppSelector } from '../../storage/hook';

export const ProfilePage = () => {
    const user = useAppSelector(state => state.user.data)

    return (
        <div className="content container">
            <Outlet />
        </div>
    )
}