import {authReducer } from './auth.slice'
import {authApi} from './auth.api'
import {Login} from './ui/login/Login'
import {Register} from './ui/register/Register'
import {CheckEmail} from './ui/checkEmail/CheckEmail'
import {NewPassword} from './ui/newPassword/NewPassword'
import {ForgotPassword} from './ui/forgotPassword/ForgotPassword'

export {authReducer, authApi, Login, Register, CheckEmail, NewPassword, ForgotPassword}