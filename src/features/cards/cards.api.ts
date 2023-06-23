import { instance } from "common/api";

export const cardsApi = {
    getCards: ( params: QueryCardsParams ) => {
        return instance.get<CardsResponseType>( "/cards/card", { params } );
    },
    createCard: ( arg: CardRequestType ) => {
        return instance.post<{ newCard: CardType }>( "/cards/card", { card: arg } );
    },
    updateCard: ( arg: UpdateCardType ) => {
        return instance.put<{ updatedCard: CardType }>( "/cards/card", { card: arg } );
    },
    deleteCard: (id: string)=> {
        return instance.delete(`/cards/card?id=${id}`)
    }
}

//types

export type CardsResponseType = {
    cards: CardType[];
    packUserId: string;
    packName: string;
    packPrivate: boolean;
    packDeckCover: string;
    packCreated: string;
    packUpdated: string;
    page: number;
    pageCount: number;
    cardsTotalCount: number;
    minGrade: number;
    maxGrade: number;
    token: string;
    tokenDeathTime: number;
}

export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;
    answer: string;
    question: string;
    grade: number;
    shots: number;
    questionImg: string;
    answerImg: string;
    answerVideo: string;
    questionVideo: string;
    comments: string;
    type: string;
    rating: number;
    more_id: string;
    created: string;
    updated: string;
    __v: number;
}

export type QueryCardsParams = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}

export type CardRequestType = {
    cardsPack_id: string;
    question: string;
    answer: string;
    grade?: number;
    shots?: number;
    answerImg?: string;
    questionImg?: string;
    questionVideo?: string;
    answerVideo?: string;
}

export type UpdateCardType = {
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    _id: string
    question?: string
}