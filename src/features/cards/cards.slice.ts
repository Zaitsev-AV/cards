import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "features/cards/types";
import {
    CardRequestType,
    cardsApi,
    CardsResponseType,
    QueryCardsParams,
    UpdateCardType
} from "features/cards/cards.api";
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
        cardsTotalCount: 100,
        minGrade: 0,
        maxGrade: 0
    },
    queryParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 0,
        sortCards: '0grade',
        page: 1,
        pageCount: 10
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
        builder.addCase( getCards.fulfilled, ( state, action ) => {
                state.pack = action.payload;
            } )
    }
} );

const getCards = createAppAsyncThunk<CardsResponseType, { id: string }>( "cards/getCards", ( arg, thunkAPI ) => {
    const { getState } = thunkAPI;
    const params = getState().cards.queryParams;
    return thunkTryCatch( thunkAPI, async () => {
        const res = await cardsApi.getCards( { ...params, cardsPack_id: arg.id } )
            .then( res => res.data );
        console.log( res );
        return res;
    } );
} );

const createCard = createAppAsyncThunk<{ newCard: CardType }, CardRequestType>
( "cards/createCard", ( arg, thunkAPI ) => {
    const { dispatch, getState } = thunkAPI;
    const id = getState().cards.queryParams.cardsPack_id;
    return thunkTryCatch( thunkAPI, async () => {
        await cardsApi.createCard( arg );
        dispatch( getCards( { id } ) );
    } );
} );

const updateCard = createAppAsyncThunk<{ updatedCard: CardType }, UpdateCardType>
( "cards/createCard", ( arg, thunkAPI ) => {
    const { dispatch, getState } = thunkAPI;
    const id = getState().cards.queryParams.cardsPack_id;
    return thunkTryCatch( thunkAPI, async () => {
        await cardsApi.updateCard( arg );
        dispatch( getCards( { id } ) );
    } );
} );

const deleteCard = createAppAsyncThunk<{ deletedCard: CardType }, { _id: string }>
( "cards/createCard", ( arg, thunkAPI ) => {
    const { dispatch, getState } = thunkAPI;
    const id = getState().cards.queryParams.cardsPack_id;
    return thunkTryCatch( thunkAPI, async () => {
        await cardsApi.deleteCard( arg._id );
        dispatch( getCards( { id } ) );
    } );
} );


export const cardsThunks = { getCards, createCard, updateCard, deleteCard };
export const cardsReducer = slice.reducer;
export const cardsActions = slice.actions;