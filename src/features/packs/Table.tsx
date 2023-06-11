import { useState } from "react";
import {
    createStyles,
    Table,
    rem, ScrollArea
} from "@mantine/core";


const useStyles = createStyles( ( theme ) => ( {
    th: {
        padding: "0 !important"
    },
    
    control: {
        width: "95%",
        padding: `${ theme.spacing.xs } ${ theme.spacing.md }`,
        
        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[ 6 ] : theme.colors.gray[ 0 ]
        }
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

export interface TableSortProps {
    data: RowData[];
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
}


interface MantineTableProps {
    data: RowData[];
}
export const STable: React.FC<MantineTableProps> = ({ data }) => {
    return (
        <ScrollArea>
        <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Update</th>
                    <th>Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.cards}</td>
                        <td>{row.update}</td>
                        <td>{row.created}</td>
                        <td>{row.actions}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
            </ScrollArea>
    );
};

