import ProfileFragment from "../components/fragments/Profile/ProfileFragment";
import UserLayout from "../components/layouts/UserLayout";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const profileData = useLogin();
    return (
        <UserLayout>
            <ProfileFragment
            username={profileData.username}
            firstName={profileData.firstName}
            lastName={profileData.lastName}
            email={profileData.email}
            image={profileData.image}
            />
        </UserLayout>
    )
}

export default ProfilePage