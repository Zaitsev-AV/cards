import { useAppDispatch, useAppSelector } from "common/hooks";
import { packData } from "features/packs/selectors";
import { CreatePackType } from "features/packs/pack.api";
import { packListThunks } from "features/packs/pack.slice";

export const usePackList = () => {
    
    const dispatch = useAppDispatch()
    const cardPacks = useAppSelector(packData)
    const addNewPackHandler = (arg: CreatePackType) => {
        dispatch(packListThunks.createPack(arg))
    };
    
    return {cardPacks}
}