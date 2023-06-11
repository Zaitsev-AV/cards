import { useProfile } from "features/profile/useProfile";
import { useAppDispatch, useAppSelector, useDebounce } from "common/hooks";
import {
    selectMaxCardsCount,
    selectMaxParams, selectMinCardsCount,
    selectMinParams,
    selectPackNameParams, selectPacksTotalCount,
    selectPageCountParams,
    selectPageParams,
    selectSortPacksParams
} from "features/packs/selectors";
import { packListActions } from "features/packs/pack.slice";
import { useEffect } from "react";

export const usePacksFiltration = () => {

    const dispatch = useAppDispatch()
    const {selectProfileID} = useProfile()
    const min = useAppSelector(selectMinParams)
    const max = useAppSelector(selectMaxParams)
    const pageCount = useAppSelector(selectPageCountParams)
    const page = useAppSelector( selectPageParams );
    const sortPack = useAppSelector( selectSortPacksParams );
    const packName = useAppSelector( selectPackNameParams );
    const packsTotalCount = useAppSelector( selectPacksTotalCount );
    const minCardsCount = useAppSelector( selectMinCardsCount );
    const maxCardsCount = useAppSelector( selectMaxCardsCount );
    
    const showMyPacks = () => {
        dispatch( packListActions.setQueryParams( { user_id: selectProfileID } ) );
        //     dispatch(packListThunks.getPacks)
    };
    const showAllPacks = () => {
        dispatch(packListActions.setQueryParams({user_id: ''}))
    };
    
    const searchByList = (value: string) => {
        dispatch(packListActions.setQueryParams({packName: value}))
    };// todo разобраться с debounce
    


    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    // };
        const handlePageChange  = (page: number) => {
        dispatch(packListActions.setQueryParams({page}))
    };
    
    
    const handleSelectChange  = (pageCount: string) => {
        dispatch(packListActions.setQueryParams({pageCount: +pageCount}))
    };
    
    const handleMaxCardsCount = (max: number) => {
        dispatch(packListActions.setQueryParams({max}))
    };
    
    const handleMinCardsCount = (max: number) => {
        dispatch(packListActions.setQueryParams({max}))
    };
    
    return {
        showMyPacks,
        showAllPacks,
        searchByList,
        handleSelectChange,
        pageCount,
        page,
        maxCards: max,
        minCards: min,
        totalCount: packsTotalCount,
        handlePageChange,
        handleMinCardsCount,
        handleMaxCardsCount,
        maxCardsCount,
        minCardsCount
    };
    
    
}