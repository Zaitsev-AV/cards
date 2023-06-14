import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectCardPacks } from "features/packs/pack.selectors";
import { ArgCreatePackType } from "features/packs/pack.api";
import { packListThunks } from "features/packs/pack.slice";

export const usePackList = () => {
    
    const dispatch = useAppDispatch();
    const cardPacks = useAppSelector( selectCardPacks );
    
    const addNewPackHandler = ( arg: ArgCreatePackType ) => {
        dispatch( packListThunks.createPack( arg ) );
    };
    
    const deletePack = (packId: string) => {
        dispatch(packListThunks.deletePack({packId}))
    };
    
    
    
    return {
        cardPacks,
        addNewPack: addNewPackHandler,
        deletePack
        
    };
}