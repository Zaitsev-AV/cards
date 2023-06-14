import React from "react";
import { createStyles } from "@mantine/core";
import { CardsTableBodyData } from "features/cards/ui/CardsTable/CardsTable";
import { useCards } from "features/cards/hooks/useCards";
import { useProfile } from "features/profile/hooks/useProfile";


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
    data: CardsTableBodyData[]
}

export const CardsTableBody: React.FC<TableBodyPropsType> = ({data}) => {
    const { classes } = useStyles();
    const { packUserId } = useCards();
    const { profileId } = useProfile();
 
    return (
        <tbody className={ classes.tbody }>
        { data.map( ( row ) => (
            <tr key={ row.packId }>
                <td className={classes.td} style={ { fontSize: "16px" } }>{ row.question }</td>
                <td className={classes.td} style={ { fontSize: "16px" } }>{ row.answer }</td>
                <td className={classes.td}>{ row.update }</td>
                <td className={classes.td}>{ row.grade }</td>
                {packUserId === profileId && <td>{ row.grade }</td>}
            </tr>
        ) ) }
        </tbody>
    );
};