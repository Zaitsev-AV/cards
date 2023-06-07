import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  
  const onLogOutHandler = () => {
    dispatch(authThunks.logOut())
  };
  
  return {
    onLogOut: onLogOutHandler
  }
}