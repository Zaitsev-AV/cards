import { useAppSelector } from "common/hooks";
import { selectProfile, selectProfileEmail, selectUserID, selectUserName } from "features/profile/profile.selectors";

export const useProfile = () => {
    const profileEmail = useAppSelector( selectProfileEmail );
    const profileName = useAppSelector( selectUserName );
    const profileId = useAppSelector( selectUserID );
    const userProfile = useAppSelector( selectProfile );
    return {
        profileEmail,
        profileId,
        profileName,
        userProfile
    };
};