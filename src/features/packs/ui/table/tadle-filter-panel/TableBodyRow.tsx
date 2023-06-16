import React from "react";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { toast } from "react-toastify";
import { useProfile } from "features/profile/hooks/useProfile";
import { useCards } from "features/cards/hooks/useCards";
import { usePackList } from "features/packs/hooks/usePackList";
import { createStyles } from "@mantine/core";
import { Modals } from "common/components/Modals/Modals";
import { useDisclosure } from "@mantine/hooks";

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
    const { profileId } = useProfile();
    const { fetchStudyCards } = useCards();
    const { editPack, deletePack } = usePackList();
    const editPackHandler = ( id: string, value: string, checked: boolean ) => {
        console.log( id );
        editPack( { _id: id, name: value, private: checked } );
        toast.success( "Package updated successfully 🥳" );
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
            
            <tr key={ packId }>
                <td className={ classes.td }
                    style={ { fontSize: "16px", cursor: "pointer" } }
                    onClick={ () => fetchStudyCards( packId,
                        count ) }>{ name.trim().length < 20 ? name : name.trim().slice( 0,
                    25 ) + "..." }</td>
                <td className={ classes.td }
                    style={ { fontSize: "16px" } }>{ cards }</td>
                <td className={ classes.td }>{ update }</td>
                <td className={ classes.td }>{ created }</td>
                <td className={ classes.td }>{ userId === profileId
                    ?
                    <><MdDeleteOutline
                        size={ 20 }
                        cursor={ "pointer" }
                        onClick={ () => deletePack( packId ) } />
                        <MdModelTraining
                            size={ 20 }
                            cursor={ "pointer" } />
                        <TbPencilMinus
                            size={ 20 }
                            cursor={ "pointer" }
                            onClick={ open }
                        /></>
                    : ( cards !== 0 && <MdModelTraining size={ 20 }
                                                        cursor={ "pointer" } /> ) }</td>
            </tr>
        </>
    );
};