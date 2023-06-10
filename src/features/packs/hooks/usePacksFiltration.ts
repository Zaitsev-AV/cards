import { useProfile } from "features/profile/useProfile";
import { useAppDispatch, useAppSelector } from "common/hooks";
import {
    selectMaxParams,
    selectMinParams, selectPackNameParams,
    selectPageCountParams,
    selectPageParams,
    selectSortPacksParams
} from "features/packs/selectors";
import { packListActions, packListThunks } from "features/packs/pack.slice";

export const usePacksFiltration = () => {

    const dispatch = useAppDispatch()
    const {selectProfileID} = useProfile()
    const min = useAppSelector(selectMinParams)
    const max = useAppSelector(selectMaxParams)
    const pageCount = useAppSelector(selectPageCountParams)
    const page = useAppSelector( selectPageParams );
    const sortPack = useAppSelector( selectSortPacksParams );
    const packName = useAppSelector( selectPackNameParams );
    
    
    const showMyPacks = () => {
        dispatch( packListActions.setQueryParams( { user_id: selectProfileID } ) );
        //     dispatch(packListThunks.getPacks)
    };
    const showAllPacks = () => {
        dispatch(packListActions.setQueryParams({user_id: ''}))
    };
    
    const searchByList = (name: string) => {
        dispatch(packListActions.setQueryParams({packName: name}))
    };
    
    return {
        showMyPacks,
        showAllPacks,
        searchByList
    };
    
    
}