import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectCardPacks } from "features/packs/pack.selectors";
import { ArgCreatePackType, UpdatePackType } from "features/packs/pack.api";
import { packListThunks } from "features/packs/pack.slice";

export const usePackList = () => {
    
    const dispatch = useAppDispatch();
    const cardPacks = useAppSelector( selectCardPacks );
    
    const addNewPackHandler = ( arg: ArgCreatePackType ) => {
        dispatch( packListThunks.createPack( arg ) );
    };
    
    const editPackHandler = ( arg:  UpdatePackType ) => {
        dispatch( packListThunks.updatePack( arg ) );
    };
    
    const deletePack = (packId: string) => {
        dispatch(packListThunks.deletePack({packId}))
    };
    
    
    
    return {
        cardPacks,
        editPack: editPackHandler,
        addNewPack: addNewPackHandler,
        deletePack
        
    };
}