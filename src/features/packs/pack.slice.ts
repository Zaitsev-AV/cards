import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    CardPacksResponse,
    CardsResponse,
    ArgCreatePackType,
    packApi,
    QueryPacksParams, UpdatePackRequestType, UpdatePackType
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
                state.packList = action.payload.packList
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
    const { dispatch } = thunkAPI;
    return thunkTryCatch( thunkAPI, async () => {
        await packApi.createPack( arg );
        dispatch( getPacks() );
    } );
} );

const updatePack = createAppAsyncThunk<void, UpdatePackType>
( "pack/updatePack", ( arg, thunkAPI ) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch( thunkAPI, async () => {
        await packApi.updatePack( arg );
        dispatch( getPacks() );
    } );
} );

const deletePack = createAppAsyncThunk<void, {packId: string}>( "pack/deletePack", ( arg, thunkAPI ) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async ()=> {
        await packApi.deletePack(arg.packId)
        dispatch(getPacks())
    });
} );
export const packListThunks = { getPacks, createPack, deletePack, updatePack };
export const packListActions = slice.actions;
