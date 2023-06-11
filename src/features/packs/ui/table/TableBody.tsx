import React from "react";
import { createStyles } from "@mantine/core";
import { RowData } from "features/packs/ui/table/PackTable";


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
    const { classes } = useStyles()
    return (
        <tbody className={ classes.tbody }>
        { data.map( ( row, index ) => (
            <tr key={ index }>
                <td  style={{fontSize: "16px"}}>{ row.name.trim().length < 20 ? row.name  : row.name.trim().slice(0, 25) + "..." }</td>
                <td style={{fontSize: "16px"}}>{ row.cards }</td>
                <td>{ row.update }</td>
                <td>{ row.created }</td>
                <td>{ row.actions }</td>
            </tr>
        ) ) }
        </tbody>
    );
};