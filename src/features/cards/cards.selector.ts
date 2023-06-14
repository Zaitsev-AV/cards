import { RootState } from "app/store";

export const selectQueryParams = (state: RootState) => state.cards.queryParams
export const selectCards = (state: RootState) => state.cards.pack.cards


//params

export const selectCardsPackId = (state: RootState) => state.cards.queryParams.cardsPack_id
export const selectCardQuestion = (state: RootState) => state.cards.queryParams.cardQuestion
export const selectCardAnswer = (state: RootState) => state.cards.queryParams.cardAnswer
export const selectSortCards = (state: RootState) => state.cards.queryParams.sortCards
