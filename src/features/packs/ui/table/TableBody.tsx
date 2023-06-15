import React from "react";
import { createStyles } from "@mantine/core";
import { RowData } from "features/packs/ui/table/PackTable";
import { useProfile } from "features/profile/hooks/useProfile";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { usePackList } from "features/packs/hooks/usePackList";
import { useCards } from "features/cards/hooks/useCards";
import { Modals } from "common/components/Modals/Modals";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";


const useStyles = createStyles( (  ) => ( {
    tbody: {
        backgroundColor: "#f3f0f0",
    },
    td: {
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
    }
} ) );

type TableBodyPropsType = {
    data: RowData[]
}

export const TableBody: React.FC<TableBodyPropsType> = ({data}) => {
    const [ opened, { open, close } ] = useDisclosure( false );
    const { classes } = useStyles();
    const {profileId} = useProfile()
    const { deletePack } = usePackList();
    const { fetchStudyCards } = useCards();
    const { editPack} = usePackList()
    const editPackHandler = ( id: string, value: string, checked: boolean ) => {
            console.log(id)
        editPack( { _id: id, name: value, private: checked } );
        toast.success("Package updated successfully 🥳")
    };
    
    
    if ( data.length === 0 ) {
        return (
            <tbody>
            <tr>
                <td colSpan={ 5 }
                    style={ {
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "22px",
                        backgroundColor: "#efd0d0",
                        padding: "25px"
                    } }>
                    Колоды с введенным название не найдены. Измените параметры запроса
                </td>
            </tr>
            </tbody>
        );
    }// todo за фиксить появление этой части таблицы при первой отрисовки компонента
    return (
        <tbody className={ classes.tbody }>
        { data.map( ( row ) => (
            <tr key={ row.packId }>
                <td className={classes.td} style={ { fontSize: "16px" , cursor: "pointer"} } onClick={()=> fetchStudyCards(row.packId, row.count)}>{ row.name.trim().length < 20 ? row.name : row.name.trim().slice( 0,
                    25 ) + "..." }</td>
                <td className={classes.td} style={ { fontSize: "16px" } }>{ row.cards }</td>
                <td className={classes.td}>{ row.update }</td>
                <td className={classes.td}>{ row.created }</td>
                <td className={classes.td}>{ row.userId === profileId
                    ?
                    <><MdDeleteOutline
                        size={20}
                        cursor={"pointer"} onClick={()=>deletePack(row.packId)} />
                        <MdModelTraining
                            size={20}
                            cursor={"pointer"}/>
                        <TbPencilMinus
                            size={20}
                            cursor={"pointer"}
                        onClick={open}
                        /></>
                    : ( row.cards !== 0 && <MdModelTraining size={20} cursor={"pointer"}/>) }</td>
                <Modals
                    title={"Edit pack"}
                    packName={row.name}
                    status={row.private}
                    close={ close }
                    opened={ opened }
                    callback={ ( name, checked ) => editPackHandler( row.packId, name, checked ) } />
            </tr>
            
        ) ) }
        </tbody>
    );
};