import React from "react";
import { TbPencilMinus } from "react-icons/tb";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";

export const PackActions: React.FC<{ packId: string, open: ()=> void }> = ({ packId, open }) => {
// todo удалить или переделать т.к не правильно открывается модальное окно
    return (
        <>
            <MdDeleteOutline
                size={20}
                cursor="pointer"
                onClick={open}
            />
            <MdModelTraining size={20} cursor="pointer" />
            <TbPencilMinus size={20} cursor="pointer" onClick={open} />
        </>
    );
};