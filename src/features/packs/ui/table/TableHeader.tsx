import React, { useState } from "react";
import { createStyles, UnstyledButton } from "@mantine/core";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

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

export type TableHeaderPropsType = {
    nameIcon: React.ReactNode
    cardsIcon: React.ReactNode
    dateIcon: React.ReactNode
    onSortName: ()=> void
    onSortCards: ()=> void
    onSortDate: ()=> void
};
export const TableHeader: React.FC<TableHeaderPropsType> = ( props ) => {
    const {nameIcon, dateIcon, cardsIcon, onSortName, onSortDate, onSortCards} = props;
    const { classes } = useStyles();
    
    return (
        <thead className={ classes.thead }>
        <tr>
            <th>
                <UnstyledButton onClick={ onSortName }
                                className={ classes.control }>
                    Name
                    { nameIcon }
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton onClick={ onSortCards }
                                className={ classes.control }>
                    Cards
                    { cardsIcon }
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton onClick={ onSortDate }
                                className={ classes.control }>
                    Update
                    { dateIcon }
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton className={ classes.control }>
                    Created
                </UnstyledButton>
            </th>
            <th>
                <UnstyledButton className={ classes.control }>
                    Actions
                </UnstyledButton>
            </th>
        </tr>
        </thead>
    );
};