import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "features/cards/types";
import { cardsApi, CardsResponseType, QueryCardsParams } from "features/cards/cards.api";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";

const initialState: InitialStateType = {
    pack: {
        cards: [],
        packUserId: "",
        packName: "",
        packDeckCover: "",
        packCreated: "",
        packUpdated: "",
        page: 0,
        pageCount: 0,
        cardsTotalCount: 0,
        minGrade: 0,
        maxGrade: 0
    },
    queryParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 0,
        sortCards: '',
        page: 0,
        pageCount: 0
    }
};

type InitialStateType = {
    pack:
        {
            cards: CardType[];
            packUserId: string;
            packName: string;
            packDeckCover: string;
            packCreated: string;
            packUpdated: string;
            page: number;
            pageCount: number;
            cardsTotalCount: number;
            minGrade: number;
            maxGrade: number;
        },
    queryParams: {
        cardAnswer: string
        cardQuestion: string
        cardsPack_id: string
        min: number
        max: number
        sortCards: string
        page: number
        pageCount: number
    }
}

export const slice = createSlice( {
    name: "cards",
    initialState,
    reducers: {
        setQueryParams: ( state, action: PayloadAction<QueryCardsParams> ) => {
            state.queryParams = { ...state.queryParams, ...action.payload };
        }
    },
    extraReducers:builder =>  {
        builder.addCase(getCards.fulfilled, (state, action)=> {
            state.pack = action.payload
        })
    }
} );

const getCards = createAppAsyncThunk<CardsResponseType, void>( "cards/getCards", ( arg, thunkAPI ) => {
    const { getState } = thunkAPI;
    const params = getState().cards.queryParams;
    return thunkTryCatch( thunkAPI, async () => {
        const res = await cardsApi.getCards( { ...params } ).then(res => res.data);
            console.log(res)
        return  res ;
    } );
} );


export const cardsThunks = {getCards}
export const cardsReducer = slice.reducer;
export const cardsActions = slice.actions