import { createStyles, rem, ScrollArea, Table, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
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
    },
    tbody: {
        backgroundColor: "#f3f0f0"
    },
    icon: {
        width: rem( 21 ),
        height: rem( 21 ),
        borderRadius: rem( 21 )
    }
} ) );

export interface RowData {
    name: string;
    cards: number;
    update: string;
    created: string;
    actions: string;
}

interface MantineTableProps {
    data: RowData[];
}

export const STable: React.FC<MantineTableProps> = ( { data } ) => {
    const [ sortName, setSortName ] = useState<boolean | null>( null );
    const [ sortCards, setSortCards ] = useState<boolean | null>( null );
    const [ sortDate, setSortDate ] = useState<boolean | null>( null );
    const { sortByNamePack, sortByCards, sortByDate } = usePacksFiltration();
    const { classes } = useStyles();
    const nameIcon = sortName !== null ? ( sortName ? <BsSortAlphaDown size={ 25 }
                                                                       style={ { paddingLeft: "10px" } } /> :
        <BsSortAlphaUp size={ 25 }
                       style={ { paddingLeft: "10px" } } /> ) : <BiSortAlt2 size={ 25 }
                                                                            style={ { paddingLeft: "10px" } } />;
    
    
    const cardsIcon = sortCards !== null ? ( sortCards ? <BsSortNumericUp size={ 25 }
                                                                          style={ { paddingLeft: "10px" } } />
        : <BsSortNumericDownAlt size={ 25 }
                                style={ { paddingLeft: "10px" } } /> ) : <BiSortAlt2 size={ 25 }
                                                                                     style={ { paddingLeft: "10px" } } />;
    
    
    const dateIcon = sortDate !== null ? ( sortDate ? <FaSortUp size={ 25 }
                                                                style={ { paddingLeft: "10px" } } />
        : <FaSortDown size={ 25 }
                      style={ { paddingLeft: "10px" } } /> ) : <FaSort size={ 25 }
                                                                       style={ { paddingLeft: "10px" } } />;
    
    const onSortName = () => {
        setSortName( !sortName );
        if ( sortName ) {
            sortByNamePack( "0" );
        } else {
            sortByNamePack( "1" );
        }
    };
    
    const onSortCards = () => {
        setSortCards( !sortCards );
        if ( sortCards ) {
            sortByCards( "0" );
        } else {
            sortByCards( "1" );
        }
    };
    
    const onSortDate = () => {
        setSortDate( !sortDate );
        if ( sortDate ) {
            sortByDate( "0" );
        } else {
            sortByDate( "1" );
        }
    };
    return (
        <ScrollArea>
            <Table horizontalSpacing="md"
                   verticalSpacing="xs"
                   miw={ 700 }
                   sx={ { tableLayout: "fixed" } }>
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
                        <UnstyledButton onClick={ onSortDate }
                                        className={ classes.control }>
                            Created
                        </UnstyledButton>
                    </th>
                    <th>
                        <UnstyledButton onClick={ onSortDate }
                                        className={ classes.control }>
                            Actions
                        </UnstyledButton>
                    </th>
                </tr>
                </thead>
                <tbody className={ classes.tbody }>
                { data?.map( ( row, index ) => (
                    <tr key={ index }>
                        <td>{ row.name }</td>
                        <td>{ row.cards }</td>
                        <td>{ row.update }</td>
                        <td>{ row.created }</td>
                        <td>{ row.actions }</td>
                    </tr>
                ) ) }
                </tbody>
            </Table>
        </ScrollArea>
    );
};

