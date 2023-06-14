import React from "react";
import { createStyles, UnstyledButton } from "@mantine/core";

const useStyles = createStyles( ( theme ) => ( {
    
    control: {
        display: "flex",
        alignItems: "center",
        width: "95%",
        padding: `${ theme.spacing.xs } ${ theme.spacing.md }`,
        fontWeight: 500,
        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[ 6 ] : theme.colors.gray[ 0 ]
        }
    },
    thead: {
        backgroundColor: "#e5e5e5",
        fontFamily: "Montserrat",
        fontWeight: 700
    }
} ) );

export type CardsTableHeaderPropsType = {};
export const CardsTableHeader: React.FC<CardsTableHeaderPropsType> = ( props ) => {
    const {} = props;
    const { classes } = useStyles();
    
    return (
        <thead className={ classes.thead }>
        <tr>
            <th>
                <UnstyledButton
                    className={ classes.control }>
                    Question
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton
                    className={ classes.control }>
                    Answer
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton
                    className={ classes.control }>
                    Last Updated
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton className={ classes.control }>
                    Grade
                </UnstyledButton>
            </th>
        </tr>
        </thead>
    );
};