import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

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