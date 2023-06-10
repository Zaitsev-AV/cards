import { RootState } from "app/store";


export const selectPackData  = ( state: RootState) => state.packList.packList.cardPacks
export const selectUserId  = ( state: RootState) => state.packList.packList.cardPacks[0].user_id
export const selectPacksTotalCount  = ( state: RootState) => state.packList.packList.cardPacksTotalCount

//params
export const selectUserIdParams  = (state: RootState) => state.packList.queryParams.user_id
export const selectMaxParams  = (state: RootState) => state.packList.queryParams.max
export const selectMinParams  = (state: RootState) => state.packList.queryParams.min
export const selectPackNameParams  = (state: RootState) => state.packList.queryParams.packName
export const selectPageParams  = (state: RootState) => state.packList.queryParams.page
export const selectPageCountParams  = (state: RootState) => state.packList.queryParams.pageCount
export const selectSortPacksParams  = (state: RootState) => state.packList.queryParams.sortPacks


