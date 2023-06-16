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
import { TableBodyRow } from "features/packs/ui/table/tadle-filter-panel/TableBodyRow";


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
    const { classes } = useStyles();
    const { profileId } = useProfile();
    const { fetchStudyCards } = useCards();
    const { editPack, deletePack } = usePackList();
    
    // сделать переход на страницу с id в url и оттуда брать packId
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
        { data.map( ( row ) =>
            <TableBodyRow
                name={ row.name }
                cards={ row.cards }
                update={ row.update }
                created={ row.created }
                userId={ row.userId }
                packId={ row.packId }
                count={ row.count }
                status={ row.private }
            /> ) }
        </tbody>
    );
};
