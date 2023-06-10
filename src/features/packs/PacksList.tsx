import React from "react";
import { usePackList } from "features/packs/hooks/usePackList";
import { STable } from "features/packs/Table";
import { TableHeader } from "features/packs/ui/tadle-header/TableHeader";
import { AddPackButton } from "features/packs/ui/buttons/AddPackButton";
import { usePackListStatus } from "features/packs/hooks/usePackListStatus";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { Paginator } from "common/components/paginator/Paginator";
import { PaginationSelect } from "common/components/select/PaginationSelect";

export const PacksList: React.FC = () => {
    
    usePackListStatus()
    const {page, pageCount} = usePacksFiltration()
    
    const { cardPacks } = usePackList();
        console.log(cardPacks)
    const data = cardPacks?.map( el => {
        return {
            name: el.name,
            cards: el.cardsCount,
            update: el.updated,
            created: el.user_name,
            actions: ''
        };
    } );
    
    console.log(data + ' PacksList')
    
    return (
        <div>
            <h1>Packs list</h1>
            <AddPackButton />
            <TableHeader />
            <STable data={ data } />
            {/*<TableSort data={ data } />*/ }
            <span style={{display: 'flex', }}>
            <Paginator />
            
            <PaginationSelect />
                </span>
        </div>
    );
};