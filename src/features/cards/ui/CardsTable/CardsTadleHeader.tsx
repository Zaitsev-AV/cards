import React, { useState } from "react";
import { createStyles, UnstyledButton } from "@mantine/core";
import { useCards } from "features/cards/hooks/useCards";
import { useProfile } from "features/profile/hooks/useProfile";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";

const useStyles = createStyles( ( theme ) => ( {
    
    control: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: `${ theme.spacing.xs } ${ theme.spacing.md }`,
        fontWeight: 500,
        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[ 6 ] : theme.colors.gray[ 0 ]
        }
    },
    fake: {
        width: "3%"
    },
    thead: {
        backgroundColor: "#e5e5e5",
        fontFamily: "Montserrat",
        fontWeight: 700
    }
} ) );

export const CardsTableHeader: React.FC = () => {
    const { classes } = useStyles();
    const [ sortName, setSortName ] = useState<boolean | null>( null );
    const { packUserId, sortByQuestion } = useCards();
    const { profileId } = useProfile();
    const onSortName = () => {
        setSortName( !sortName );
        if ( sortName ) {
            sortByQuestion( "0" );// todo убрать магические числа
        } else {
            sortByQuestion( "1" );
        }
    };
    const sortIcon = sortName !== null ? ( sortName ? <BsSortAlphaDown size={ 25 }
                                                                       style={ { paddingLeft: "10px" } } /> :
        <BsSortAlphaUp size={ 25 }
                       style={ { paddingLeft: "10px" } } /> ) : <BiSortAlt2 size={ 25 }
                                                                            style={ { paddingLeft: "10px" } } />;
    return (
        <thead className={ classes.thead }>
        <tr>
            <th>
                <UnstyledButton
                    onClick={onSortName}
                    className={ classes.control }>
                    Question
                    {sortIcon}
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
            { profileId === packUserId && <th  className={ classes.fake }>
                  <UnstyledButton className={ classes.fake }>
                  
                  </UnstyledButton>
            </th> }
        </tr>
        </thead>
    );
};