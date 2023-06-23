import React, { useEffect } from "react";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { CardsTable } from "features/cards/ui/CardsTable/CardsTable";
import { TextInput } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";
import { useCards } from "features/cards/hooks/useCards";
import { useCardsStatus } from "features/cards/hooks/useCardsStatus";
import { useSearch } from "common/hooks/useSearch";
import { useParams } from "react-router-dom";
import { useProfile } from "features/profile/hooks/useProfile";
import { AddCardsModals } from "common/components/Modals/AddCardsModals";
import { useDisclosure } from "@mantine/hooks";
import { BackButton } from "common/components/backButton/BackButton";


export const Cards: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchByCards } = useCards();
    const { packId } = useParams();
    const { packUserId, createNewCard, cardsPackId } = useCards();
    useCardsStatus();
    const { profileId } = useProfile();
    const { search, handleSearchChange } = useSearch( searchByCards );
    const [ opened, { open, close } ] = useDisclosure( false );
    
    const addCardsModalHandler = ( question: string, answer: string ) => createNewCard(
        { cardsPack_id: cardsPackId, question, answer } );
    
    useEffect( () => {
        dispatch( cardsThunks.getCards( { id: packId ?? "" } ) );
    }, [] );
    console.log( profileId );
    console.log( packUserId );
    return (
        <div>
            <BackButton/>
            <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                { profileId === packUserId
                    ?
                    <>
                        <h1>My Pack</h1>
                        <ActionButton callback={ open }
                                      size={ "md" }
                                      text={ "Add new Card" } />
                        <AddCardsModals callback={ addCardsModalHandler }
                                        title={ "Add new Card" }
                                        opened={ opened }
                                        close={ close } />
                    </>
                    :
                    <>
                        <h1>Friend’s Pack</h1>
                        <ActionButton callback={ () => {} }
                                      size={ "md" }
                                      text={ "Learn to pack" } />
                        
                    </>
                }
            </div>
            <div>
                <div style={ { marginBottom: "10px" } }>Search</div>
                <TextInput
                    placeholder="Provide your text"
                    mb="md"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <CardsTable />
        </div>
    );
};