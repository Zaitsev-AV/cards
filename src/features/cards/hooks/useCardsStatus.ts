import { useAppDispatch, useAppSelector } from "common/hooks";
import {
    selectCardAnswer,
    selectCardQuestion,
    selectCardsPackId,
    selectSortCards
} from "features/cards/cards.selector";
import { useEffect } from "react";
import { cardsThunks } from "features/cards/cards.slice";

export const useCardsStatus = () => {
    
    const dispatch = useAppDispatch()
    const cardQuestion = useAppSelector(selectCardQuestion)
    const sortCards = useAppSelector(selectSortCards)
    const cardAnswer = useAppSelector(selectCardAnswer)
    const cardsPackId = useAppSelector(selectCardsPackId)
    
    
    useEffect(()=> {
        dispatch(cardsThunks.getCards())
    }, [cardAnswer, sortCards, cardQuestion, cardsPackId])
}