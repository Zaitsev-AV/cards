import React from "react";
import { createStyles } from "@mantine/core";
import { RowData } from "features/packs/ui/table/PackTable";
import { useProfile } from "features/profile/hooks/useProfile";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { usePackList } from "features/packs/hooks/usePackList";


const useStyles = createStyles( (  ) => ( {
    tbody: {
        backgroundColor: "#f3f0f0",
    },
    td: {
        fontSize: 25
    }
} ) );

type TableBodyPropsType = {
    data: RowData[]
}

export const TableBody: React.FC<TableBodyPropsType> = ({data}) => {
    const { classes } = useStyles();
    const {profileId} = useProfile()
    const {deletePack} = usePackList()
    if ( data.length === 0 ) {
        return (
            <tbody >
            <tr>
                <td colSpan={5}  style={{textAlign: "center", fontWeight: 700, fontSize: "22px", backgroundColor: "#efd0d0", padding: "25px"}}>
                    Колоды с введенным название не найдены. Измените параметры запроса
                </td>
            </tr>
            </tbody>
        );
    }
    return (
        <tbody className={ classes.tbody }>
        { data.map( ( row ) => (
            <tr key={ row.packId }>
                <td style={ { fontSize: "16px" } }>{ row.name.trim().length < 20 ? row.name : row.name.trim().slice( 0,
                    25 ) + "..." }</td>
                <td style={ { fontSize: "16px" } }>{ row.cards }</td>
                <td>{ row.update }</td>
                <td>{ row.created }</td>
                <td>{ row.userId === profileId
                    ?
                    <><MdDeleteOutline
                        size={20}
                        cursor={"pointer"} onClick={()=>deletePack(row.packId)} />
                        <MdModelTraining
                            size={20}
                            cursor={"pointer"}/>
                        <TbPencilMinus
                            size={20}
                            cursor={"pointer"}/></>
                    : ( row.cards !== 0 && <MdModelTraining size={20} cursor={"pointer"}/>) }</td>
            </tr>
        ) ) }
        </tbody>
    );
};