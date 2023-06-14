import React, { useEffect } from "react";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { CardsTable } from "features/cards/ui/CardsTable/CardsTable";
import { TextInput } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";


export const Cards: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect( () => {
        dispatch( cardsThunks.getCards() );
    }, [] );
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>Friend’s Pack</h1>
                <ActionButton callback={ () => {
                } }
                              text={ "Learn to pack" } />
            </div>
            <div>
                <div style={ { marginBottom: "10px" } }>Search</div>
                <TextInput
                    placeholder="Provide your text"
                    mb="md"
                />
            </div>
            <CardsTable />
        </div>
    );
};