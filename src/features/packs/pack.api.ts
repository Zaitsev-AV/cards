import { instance } from "common/api";
import { AxiosResponse } from "axios";

export const packApi = {
    getPacks ( params?: Partial<QueryPacksParams> )  {
        return instance.get <CardsResponse, AxiosResponse>( "/cards/pack", { params } );
    },
    createPack: ( cardsPack: ArgCreatePackType ) => {
        return instance.post<CreatePackResponseType>( "/cards/pack", { cardsPack } );
    },
    deletePack: ( id: string ) => {
        return instance.delete( `/cards/pack?id=${id}` );
    },
    updatePack: (data: UpdatePackRequestType) => {
        return instance.put<UpdatePackRequestType>('/cards/pack', data)
    }
    
};

//types
export type UpdatePackType = {
    _id: string
    name?: string
    deckCover?: string
}

export type UpdatePackRequestType = {
    cardsPack: UpdatePackType
}


export type CreatePackResponseType = {
    newCardsPack: NewCardsPackType;
    token: string;
    tokenDeathTime: number;
}
export type NewCardsPackType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: boolean;
    name: string;
    path: string;
    grade: number;
    shots: number;
    deckCover: string;
    cardsCount: number;
    type: string;
    rating: number;
    created: string;
    updated: string;
    more_id: string;
    __v: number;
}

export type ArgCreatePackType = {
    name?: string
    deckCover?: string
    private?: boolean
}

export type QueryPacksParams = {
    packName?: string
    pageCount?: number
    page?: number
    min?: number
    max?: number
    sortPacks?: string // возможно нет
    user_id?: string
}

export type CardsResponse = {
    cardPacks: CardPacksResponse[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
}

export type CardPacksResponse = {
    _id: string;
    user_id: string;
    user_name: string;
    private: boolean;
    name: string;
    path: string;
    grade: number;
    shots: number;
    cardsCount: number;
    type: string;
    rating: number;
    created: string;
    updated: string;
    more_id: string;
    __v: number;
}