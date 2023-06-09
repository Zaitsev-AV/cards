import React, { useEffect } from "react";
import { packListThunks } from "features/packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { usePackList } from "features/packs/hooks/usePackList";

import { STable } from "features/packs/Table";
import { TableHeader } from "features/packs/ui/tadle-header/TableHeader";
import { AddPackButton } from "features/packs/ui/buttons/AddPackButton";
import { Slider } from "features/packs/ui/Slider";
import { usePackListStatus } from "features/packs/hooks/usePackListStatus";

export const PacksList: React.FC = () => {
    
    usePackListStatus()
    
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
            <TableHeader/>
            <STable data={data}/>
            {/*<TableSort data={ data } />*/}
        </div>
    );
};