import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AddCardsModals } from "common/components/Modals/AddCardsModals";
import { TbPencilMinus } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";
import { DeleteModal } from "common/components/Modals/DeleteModal";

type CardActionsPropsType = {
    cardName: string
}
export const CardActions: React.FC<CardActionsPropsType> = ({cardName}) => {
    const [ opened, { open, close } ] = useDisclosure( false );
    const [ openedDelete, setOpened ] = useState( false );
    return (
        <td>
            <DeleteModal opened={openedDelete} close={setOpened} title={"Delete Card"} callback={()=>{}} name={cardName}/>
            <MdDeleteOutline
                size={20}
                cursor={"pointer"} onClick={()=>setOpened(true)} />
            <AddCardsModals opened={opened} close={close} title={"Edit card"} callback={()=>{}}/>
            <TbPencilMinus
                onClick={open}
                size={20}
                cursor={"pointer"}/>
        </td>
    );
};