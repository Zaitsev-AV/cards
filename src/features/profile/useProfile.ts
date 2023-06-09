import { useAppSelector } from "common/hooks";
import { profile, userEmail, userID, userName } from "features/profile/selectors";

export const useProfile = () => {
    const selectProfileEmail = useAppSelector( userEmail );
    const selectProfileName = useAppSelector( userName );
    const selectProfileID = useAppSelector( userID );
    const selectUserProfile = useAppSelector( profile );
    return {
        selectProfileEmail,
        selectProfileID,
        selectProfileName,
        selectUserProfile
    };
};