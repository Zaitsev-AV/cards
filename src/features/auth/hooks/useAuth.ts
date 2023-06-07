import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { authIsLoggedIn, authIsRegistered } from "features/auth/selectors";
import { ArgRegisterType } from "features/auth/auth.api";

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(authIsLoggedIn)
  const isRegistered = useAppSelector(authIsRegistered)
  
  
  const onLogOutHandler = () => {
    dispatch(authThunks.logOut())
  };
  
  const onSignUpHandler = (arg: ArgRegisterType) => {
    dispatch(authThunks.register(arg))
  };
  
  return {
    onLogOut: onLogOutHandler,
    onSignUp: onSignUpHandler,
    isRegistered,
    isLoggedIn
  }
}