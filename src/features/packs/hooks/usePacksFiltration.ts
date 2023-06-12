import { useProfile } from "features/profile/useProfile";
import { useAppDispatch, useAppSelector } from "common/hooks";
import {
    selectMaxCardsCount,
    selectMaxParams,
    selectMinCardsCount,
    selectMinParams,
    selectPackNameParams,
    selectPacksTotalCount,
    selectPageCountParams,
    selectPageParams,
    selectSortPacksParams
} from "features/packs/pack.selectors";
import { packListActions } from "features/packs/pack.slice";
export const usePacksFiltration = () => {

    const dispatch = useAppDispatch()
    const {profileId} = useProfile()
    const min = useAppSelector(selectMinParams)
    const max = useAppSelector(selectMaxParams)
    const pageCount = useAppSelector(selectPageCountParams)
    const page = useAppSelector( selectPageParams );
    const sortPack = useAppSelector( selectSortPacksParams );
    const packName = useAppSelector( selectPackNameParams );
    const packsTotalCount = useAppSelector( selectPacksTotalCount );
    const minCardsCount = useAppSelector( selectMinCardsCount );
    const maxCardsCount = useAppSelector( selectMaxCardsCount );
    // 0 имя колонки 0 это от меньшего к большему
    const showMyPacks = () => {
        dispatch( packListActions.setQueryParams( { user_id: profileId } ) );
    };
    
    const showAllPacks = () => {
        dispatch(packListActions.setQueryParams({user_id: ''}))
    };
    
    const searchByList = (value: string) => {
        dispatch(packListActions.setQueryParams({packName: value}))
    };
    
    const handleSizePackChange = (value: number[]) => {
        dispatch(packListActions.setQueryParams({min: value[0], max: value[1]}))
    };
    
    const sortByNamePack = ( value: string) => {
        dispatch(packListActions.setQueryParams({sortPacks: `${value}name`}))
    };
    const sortByCards = (value: string) => {
        dispatch(packListActions.setQueryParams({sortPacks: `${value}cardsCount`}))
    };
    
    const sortByDate = (value: string) => {
        dispatch(packListActions.setQueryParams({sortPacks: `${value}created`}))
    };
    
    const handleResetAllFilters = () => {
        dispatch(packListActions.setQueryParams({
            min: 0,
            max: 0,
            page: 0,
            packName: "",
            pageCount: 10,
            sortPacks: "0updated",
            user_id: ""
        }))
    };

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
        handleSizePackChange,
        handleResetAllFilters,
        sortByNamePack,
        sortByCards,
        sortByDate,
        pageCount,
        page,
        totalCount: packsTotalCount,
        handlePageChange,
        handleMinCardsCount,
        handleMaxCardsCount,
        maxCardsCount,
        minCardsCount,
        min, max, sortPack
    };
    
    
}