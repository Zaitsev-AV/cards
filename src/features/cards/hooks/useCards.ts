import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectCards, selectQueryParams } from "features/cards/index";
import { cardsActions } from "features/cards/cards.slice";
import { useNavigate } from "react-router-dom";
//todo проверить пути импортов
export const useCards = () => {
    const dispatch = useAppDispatch();
    const queryParams = useAppSelector( selectQueryParams );
    const cards = useAppSelector( selectCards );
    
    const navigate = useNavigate();
    
    const fetchStudyCards = ( packId: string ) => {
        dispatch(cardsActions.setQueryParams( { cardsPack_id: packId } ));
        navigate( "/cards" );
    };
    
    const searchByCards = ( value: string ) => {
        dispatch(cardsActions.setQueryParams( { cardsPack_id: queryParams.cardsPack_id,cardQuestion: value } ));
    };
    
    return {
        fetchStudyCards,
        searchByCards,
        cards
    };
    
};