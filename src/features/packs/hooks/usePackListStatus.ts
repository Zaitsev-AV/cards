import { useAppDispatch, useAppSelector } from "common/hooks";
import {
    selectMaxParams,
    selectMinParams, selectPackNameParams,
    selectPageCountParams,
    selectPageParams,
    selectSortPacksParams, selectUserIdParams
} from "features/packs/selectors";
import { useEffect } from "react";
import { packListThunks } from "features/packs/pack.slice";

/**
 * Хук, отслеживающий состояние списка колод.
 * Он использует селекторы для получения отслеживаемых параметров и при их изменении
 * диспатчит санку для получения обновленных колод.
 *
 * @returns {void}
 */

export const usePackListStatus = () => {
    
    const dispatch = useAppDispatch()
    
    const min = useAppSelector(selectMinParams)
    const max = useAppSelector(selectMaxParams)
    const pageCount = useAppSelector(selectPageCountParams)
    const page = useAppSelector(selectPageParams)
    const sortPack = useAppSelector(selectSortPacksParams)
    const packName = useAppSelector(selectPackNameParams)
    const id = useAppSelector(selectUserIdParams)
    
    
    useEffect(()=> {
        dispatch(packListThunks.getPacks())
    }, [min, max, pageCount, page, sortPack, packName, id])
    
};