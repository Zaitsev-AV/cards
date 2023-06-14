import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "features/cards/types";
import { QueryCardsParams } from "features/cards/cards.api";

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
        setQueryParams: (state, action: PayloadAction<QueryCardsParams>)=> {
        state.queryParams =  { ...state.queryParams, ...action.payload  }
        }
    },
    extraReducers: {}
} );


export const cardsReducer = slice.reducer