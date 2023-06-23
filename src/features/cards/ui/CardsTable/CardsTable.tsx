import React from "react";
import { ScrollArea, Table } from "@mantine/core";
import { CardsTableHeader } from "features/cards/ui/CardsTable/CardsTadleHeader";
import { useCards } from "features/cards/hooks/useCards";
import { CardsTableBody } from "features/cards/ui/CardsTable/CardsTableBody";


export type CardsTableBodyData = {
    question: string
    answer: string
    update: string
    grade: number
    userId: string
    questionId: string //проверить что за ид:
}
export const CardsTable: React.FC = () => {
    const {cards} = useCards()
    const data = cards.map( el => {
        return {
            question: el.question,
            answer: el.answer,
            update: el.updated,
            grade: el.grade,
            userId: el.user_id,
            questionId: el._id //проверить что за ид
        };
    } );

    return (
        <ScrollArea>
            <Table horizontalSpacing="md"
                   verticalSpacing="xs"
                   miw={ 700 }
                   sx={ { tableLayout: "fixed" } }>
                <CardsTableHeader/>
                <CardsTableBody data={data}/>
            </Table>
        </ScrollArea>
    );
};