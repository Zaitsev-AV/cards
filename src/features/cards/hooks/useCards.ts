import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectCards, selectQueryParams } from "features/cards/index";
import { cardsActions } from "features/cards/cards.slice";
import { useNavigate, useParams } from "react-router-dom";
import { selectPackUserId } from "features/cards/cards.selector";
import { useCallback } from "react";
//todo проверить пути импортов
export const useCards = () => {
    const dispatch = useAppDispatch();
    const queryParams = useAppSelector( selectQueryParams );
    const cards = useAppSelector( selectCards );
    const packUserId = useAppSelector( selectPackUserId );
    
    const navigate = useNavigate();
    const fetchStudyCards = useCallback(( packId: string, count: number ) => {
        dispatch(cardsActions.setQueryParams( { cardsPack_id: packId, pageCount: count} ));
        navigate( `/cards/${packId}` );
    }, []);
    
    const searchByCards = ( value: string ) => {
        dispatch(cardsActions.setQueryParams( { cardsPack_id: queryParams.cardsPack_id,cardQuestion: value } ));
    };
    
    
    return {
        fetchStudyCards,
        searchByCards,
        cards, packUserId
    };
    
};