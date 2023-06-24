import React, { useState } from "react";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { toast } from "react-toastify";
import { useProfile } from "features/profile/hooks/useProfile";
import { usePackList } from "features/packs/hooks/usePackList";
import { createStyles } from "@mantine/core";
import { Modals } from "common/components/Modals/Modals";
import { useDisclosure } from "@mantine/hooks";
import { PackInfo } from "features/packs/ui/table/table-body/row/PackInfo";
import { DeleteModal } from "common/components/Modals/DeleteModal";

type TableBodyRowPropsType = {
    name: string;
    cards: number;
    update: string;
    created: string;
    userId: string;
    packId: string;
    count: number;
    status: boolean;
    
}
const useStyles = createStyles( () => ( {
    td: {
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
    }
} ) );
export const TableBodyRow: React.FC<TableBodyRowPropsType> = ( props ) => {
    const { name, created, update, count, userId, packId, status, cards } = props;
    const { classes } = useStyles();
    const [ opened, { open, close } ] = useDisclosure( false );
    const [ openedDelete, setOpened ] = useState( false );
    const { profileId } = useProfile();
    const { editPack } = usePackList();
    const editPackHandler = ( id: string, value: string, checked: boolean ) => {
        console.log( id );
        editPack( { _id: id, name: value, private: checked } );
        toast.success( "Package updated successfully 🥳" );
    };
    const { deletePack } = usePackList();
    
    const handleDeletePack = () => {
        deletePack(packId);
    };
    return (
        <>
            <Modals
                title={ "Edit pack" }
                packName={name}
                status={status}
                close={ close }
                opened={ opened }
                callback={ ( name, checked ) => editPackHandler( packId, name, checked ) }
            />
            <DeleteModal opened={openedDelete} close={setOpened} title={'Delete Pack'} callback={handleDeletePack}/>
            
            <tr key={ packId }>
                <PackInfo name={name} packId={packId} count={count}/>
                <td className={ classes.td }
                    style={ { fontSize: "16px" } }>{ cards }</td>
                <td className={ classes.td }>{ update }</td>
                <td className={ classes.td }>{ created }</td>
                <td className={ classes.td }>
                    {userId === profileId ? (
                            <>
                                <MdDeleteOutline
                                    size={20}
                                    cursor="pointer"
                                    onClick={()=>setOpened(true)}
                                />
                                <MdModelTraining size={20} cursor="pointer" />
                                <TbPencilMinus size={20} cursor="pointer" onClick={open} />
                            </>
                            // <PackActions packId={packId} open={()=>setOpened(true)} />
                        )
                        : ( cards !== 0 && <MdModelTraining size={ 20 }
                                                        cursor={ "pointer" } /> ) }</td>
            </tr>
        </>
    );
};