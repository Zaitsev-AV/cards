import React from "react";
import s from "./PacksList.module.css";
import { usePackList } from "features/packs/hooks/usePackList";
import { PackTable } from "features/packs/ui/table/PackTable";
import { AddPackButton } from "features/packs/ui/buttons/AddPackButton";
import { usePackListStatus } from "features/packs/hooks/usePackListStatus";
import { Paginator } from "features/packs/ui/table/paginator/Paginator";
import { PaginationSelect } from "common/components/select/PaginationSelect";
import { TableFilterPanel } from "features/packs/ui/table/tadle-filter-panel/TableFilterPanel";
import { useDisclosure } from "@mantine/hooks";
import { ActionButton } from "common/components/buttons/ActionButton";
import { Modals } from "common/components/Modals/Modals";
import { toast } from "react-toastify";

export const PacksList: React.FC = () => {
    const [ opened, { open, close } ] = useDisclosure( false );
    
    usePackListStatus();
    const { addNewPack } = usePackList();
    
    const { cardPacks } = usePackList();
    const data = cardPacks?.map( el => {
        return {
            name: el.name,
            cards: el.cardsCount,
            update: el.updated,
            created: el.user_name,
            userId: el.user_id,
            packId: el._id,
            count: el.cardsCount
        };
    } );
    const addNewPackHandler = ( value: string, checked: boolean ) => {
        addNewPack( { name: value, private: checked } );
        toast.success("New package created successfully 👌")
    };
    
    return (
        <div>
            <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                <h1>Packs list</h1>
                <ActionButton callback={ open }
                              text={ "Add new Pack" }
                              size={ "md" } />
                {/*<AddPackButton />*/ }
            </div>
            <TableFilterPanel />
            <PackTable data={ data } />
            <div className={ s.paginationWrapper }>
                <Paginator />
                <span>Snow</span>
                <PaginationSelect />
                <span>Cards per Page</span>
            </div>
            <Modals
                title={"Add new pack"}
                close={ close }
                opened={ opened }
                callback={ ( name, checked ) => addNewPackHandler( name, checked ) } />
        </div>
    );
};