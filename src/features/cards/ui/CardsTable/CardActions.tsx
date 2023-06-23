import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AddCardsModals } from "common/components/Modals/AddCardsModals";
import { TbPencilMinus } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";
import { DeleteModal } from "common/components/Modals/DeleteModal";
import { useCards } from "features/cards/hooks/useCards";

type CardActionsPropsType = {
    cardName: string
    _id: string
}
export const CardActions: React.FC<CardActionsPropsType> = ({cardName, _id}) => {
    const [ opened, { open, close } ] = useDisclosure( false );
    const [ openedDelete, setOpened ] = useState( false );
    const {updateCard, deleteCard} = useCards()
    return (
        <td>
            <DeleteModal opened={openedDelete} close={setOpened} title={"Delete Card"} callback={()=>deleteCard(_id)} name={cardName}/>
            <MdDeleteOutline
                size={20}
                cursor={"pointer"} onClick={()=>setOpened(true)} />
            <AddCardsModals opened={opened} close={close} title={"Edit card"}
                            callback={(question, answer)=> updateCard({_id, question, answer})}/>
            <TbPencilMinus
                onClick={open}
                size={20}
                cursor={"pointer"}/>
        </td>
    );
};