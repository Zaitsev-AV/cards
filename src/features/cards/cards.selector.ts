import { RootState } from "app/store";

export const selectCardsPackId = (state: RootState) => state.cards.queryParams.cardsPack_id
export const selectQueryParams = (state: RootState) => state.cards.queryParams
export const selectCards = (state: RootState) => state.cards.pack.cards
