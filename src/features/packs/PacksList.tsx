import React from "react";
import s from "./PacksList.module.css";
import { usePackList } from "features/packs/hooks/usePackList";
import { PackTable } from "features/packs/ui/table/PackTable";
import { AddPackButton } from "features/packs/ui/buttons/AddPackButton";
import { usePackListStatus } from "features/packs/hooks/usePackListStatus";
import { Paginator } from "features/packs/ui/table/paginator/Paginator";
import { PaginationSelect } from "common/components/select/PaginationSelect";
import { TableFilterPanel } from "features/packs/ui/table/tadle-filter-panel/TableFilterPanel";

export const PacksList: React.FC = () => {
    
    usePackListStatus()
    
    const { cardPacks } = usePackList();
    const data = cardPacks?.map( el => {
        return {
            name: el.name,
            cards: el.cardsCount,
            update: el.updated,
            created: el.user_name,
            actions: ''
        };
    } );
    
    
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>Packs list</h1>
                <AddPackButton />
            </div>
            <TableFilterPanel />
            <PackTable data={ data } />
            {/*<TableSort data={ data } />*/ }
            <div className={s.paginationWrapper}>
            <Paginator />
                <span>Snow</span>
            <PaginationSelect />
                <span>Cards per Page</span>
                </div>
        </div>
    );
};