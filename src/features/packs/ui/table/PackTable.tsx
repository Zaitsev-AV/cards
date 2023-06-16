import { ScrollArea, Table } from "@mantine/core";
import React, { useState } from "react";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { TableBody } from "features/packs/ui/table/TableBody";
import { TableHeader } from "features/packs/ui/table/TableHeader";


export interface RowData {
    name: string;
    cards: number;
    update: string;
    created: string;
    userId: string;
    packId: string;
    count: number;
    private: boolean;
}

interface MantineTableProps {
    data: RowData[];
}

export const PackTable: React.FC<MantineTableProps> = ( { data } ) => {
    const [ sortName, setSortName ] = useState<boolean | null>( null );
    const [ sortCards, setSortCards ] = useState<boolean | null>( null );
    const [ sortDate, setSortDate ] = useState<boolean | null>( null );
    
    const { sortByNamePack, sortByCards, sortByDate } = usePacksFiltration();
    
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
            sortByNamePack( "0" );// todo убрать магические числа
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
                <TableHeader nameIcon={ nameIcon }
                             cardsIcon={ cardsIcon }
                             dateIcon={ dateIcon }
                             onSortName={ onSortName }
                             onSortCards={ onSortCards }
                             onSortDate={ onSortDate } />
                <TableBody data={ data } />
            </Table>
        </ScrollArea>
    );
};

