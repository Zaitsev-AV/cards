import React from "react";
import { createStyles, UnstyledButton } from "@mantine/core";
import { useCards } from "features/cards/hooks/useCards";
import { useProfile } from "features/profile/hooks/useProfile";

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
    const { packUserId } = useCards();
    const { profileId } = useProfile();
    
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
            { profileId === packUserId && <th  className={ classes.fake }>
                  <UnstyledButton className={ classes.fake }>
                  
                  </UnstyledButton>
            </th> }
        </tr>
        </thead>
    );
};