import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectPackData } from "features/packs/selectors";
import { ArgCreatePackType } from "features/packs/pack.api";
import { packListThunks } from "features/packs/pack.slice";

export const usePackList = () => {
    
    const dispatch = useAppDispatch();
    const cardPacks = useAppSelector( selectPackData );
    
    const addNewPackHandler = ( arg: ArgCreatePackType ) => {
        dispatch( packListThunks.createPack( arg ) );
    };
    
    
    
    return {
        cardPacks,
        addNewPack: addNewPackHandler
        
    };
}