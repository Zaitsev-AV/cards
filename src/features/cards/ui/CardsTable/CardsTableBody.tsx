import React from "react";
import { createStyles } from "@mantine/core";
import { RowData } from "features/packs/ui/table/PackTable";
import { CardsTableBodyData } from "features/cards/ui/CardsTable/CardsTable";


const useStyles = createStyles( (  ) => ( {
    tbody: {
        backgroundColor: "#f3f0f0",
    },
    td: {
        fontSize: 25
    }
} ) );

type TableBodyPropsType = {
    data: CardsTableBodyData[]
}

export const CardsTableBody: React.FC<TableBodyPropsType> = ({data}) => {
    const { classes } = useStyles();
 
    return (
        <tbody className={ classes.tbody }>
        { data.map( ( row ) => (
            <tr key={ row.packId }>
                <td style={ { fontSize: "16px" } }>{ row.question }</td>
                <td style={ { fontSize: "16px" } }>{ row.answer }</td>
                <td>{ row.update }</td>
                <td>{ row.grade }</td>
            </tr>
        ) ) }
        </tbody>
    );
};