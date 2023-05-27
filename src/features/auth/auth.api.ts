import { instance } from "common/api/common.api";

export const authApi = {
	register: (arg: ArgRegisterType) => {
		return instance.post<RegisterResponseType>('auth/register', arg)
	},
	login: (arg: ArgLoginType) => {
		return instance.post<ProfileType>('auth/login', arg)
	}
}

//types

export type ArgLoginType = {
	email: string
	password: string
	rememberMe?: boolean
}
export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type RegisterResponseType = {
	addedUser: Omit<ProfileType, 'token'| 'tokenDeathTime' >;
}

 export type ProfileType = {
	_id: string;
	email: string;
	rememberMe: boolean;
	isAdmin: boolean;
	name: string;
	verified: boolean;
	publicCardPacksCount: number;
	created: string;
	updated: string;
	__v: number;
	token: string;
	tokenDeathTime: number;
}










//OMIT - удаляет из типа который передаем первым в джененрик, свойства, которые указываем в кавычках

// export type ArgType = Omit<ArgLoginType, 'rememberMe'>

//PICK - выбирает из родительского типа указанные.
// export type PickType = Pick<ArgLoginType, 'password' | 'email'>

//PARTIAL - делвет все поля не обязательными
// type ArgLoginType2 = Partial<ArgLoginType>

// type UserType = {
// 	_id: string;
// 	email: string;
// 	rememberMe: boolean;
// 	isAdmin: boolean;
// 	name: string;
// 	verified: boolean;
// 	publicCardPacksCount: number;
// 	created: string;
// 	updated: string;
// 	__v: number;
// }