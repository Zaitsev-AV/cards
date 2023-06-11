import React from "react";
import { createStyles } from "@mantine/core";
import { RowData } from "features/packs/ui/table/PackTable";


const useStyles = createStyles( (  ) => ( {
    tbody: {
        backgroundColor: "#f3f0f0"
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
                <td>{ row.name }</td>
                <td>{ row.cards }</td>
                <td>{ row.update }</td>
                <td>{ row.created }</td>
                <td>{ row.actions }</td>
            </tr>
        ) ) }
        </tbody>
    );
};