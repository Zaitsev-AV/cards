import { instance } from "common/api/common.api";

export const authApi = {
	register: () => {
		const payload: PayloadType = {
			email: "nya-admin@nya.nya",
			password: "1qazxcvBG"
		}
		return instance.post('auth/register', payload)
	}
}

export type PayloadType = {
	email: string
	password: string
}