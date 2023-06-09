import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    CardPacksResponse,
    CardsResponse,
    ArgCreatePackType,
    packApi,
    QueryPacksParams
} from "features/packs/pack.api";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";


const initialState: InitialStateType = {
    packList: {
        cardPacks: [] as CardPacksResponse[],
        page: 0,
        pageCount: 10,
        cardPacksTotalCount: 100,
        minCardsCount: 0,
        maxCardsCount: 0,
        token: "",
        tokenDeathTime: 0
    },
    queryParams: {
        min: 0,
        max: 0,
        page: 0,
        packName: "",
        pageCount: 10,
        sortPacks: "0updated",
        user_id: ""
    }
    
};

// export type CardPacksResponse = {
//     _id: string;
//     user_id: string;
//     user_name: string;
//     private: boolean;
//     name: string;
//     path: string;
//     grade: number;
//     shots: number;
//     cardsCount: number;
//     type: string;
//     rating: number;
//     created: string;
//     updated: string;
//     more_id: string;
//     __v: number;
// }

type InitialStateType = {
    packList: {
        cardPacks: CardPacksResponse[]
        page: number;
        pageCount: number;
        cardPacksTotalCount: number;
        minCardsCount: number;
        maxCardsCount: number;
        token: string;
        tokenDeathTime: number;
    },
    queryParams: QueryPacksParams
    
}


const slice = createSlice( {
    name: "pack",
    initialState,
    reducers: {
        setQueryParams: ( state, action: PayloadAction<QueryPacksParams> ) => {
        state.queryParams = {...state.queryParams, ...action.payload}
        }
    },
    extraReducers: builder => {
        builder
            .addCase( getPacks.fulfilled, ( state, action ) => {
                state.packList.cardPacks = action.payload.packList.cardPacks;
            } );
    }
} );

export const packListReducer = slice.reducer;

const getPacks = createAppAsyncThunk<{ packList: CardsResponse }, void>
( "pack/getPacks", async ( arg, thunkAPI ) => {
    const { getState } = thunkAPI;
    const params = getState().packList.queryParams;
    return thunkTryCatch( thunkAPI, async () => {
        const res = await packApi.getPacks( { ...params } );
        return { packList: res.data };
    } );
} );

const createPack = createAppAsyncThunk<void, ArgCreatePackType>
( "pack/addPack", ( arg, thunkAPI ) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    return thunkTryCatch(thunkAPI, async ()=> {
        await packApi.createPack(arg)
        dispatch(getPacks())
    })
} );
export const packListThunks = { getPacks, createPack };
export const packListActions = slice.actions
