import React, { useEffect } from "react";
import { packListThunks } from "features/packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { usePackList } from "features/packs/hooks/usePackList";

import { STable } from "features/packs/Table";
import { TableHeader } from "features/packs/ui/tadle-header/TableHeader";
import { AddPackButton } from "features/packs/ui/buttons/AddPackButton";
import { Slider } from "features/packs/ui/Slider";

export const PacksList: React.FC = () => {
    const dispatch = useAppDispatch();
    
    useEffect( () => {
        dispatch( packListThunks.getPacks() );
    }, [] );
    
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
    
    // cards: number;
    // update: string;
    // created: string
    // actions: string
    
    
    // const columns: CardPacksResponse[] = [
    //     {
    //         name: "string",
    //         Cards: "string",
    //         Update: "strin",
    //         Created: "string",
    //     },
    //     {
    //         name: "string",
    //         Cards: "string",
    //         Update: "string",
    //         Created: "string",
    //     }
    // ]
    // const {} = useReactTable( {
    //     columns,
    //     data, getCoreRowModel: getCoreRowModel(),
    //     getPaginationRowModel: getPaginationRowModel(),
    //     getSortedRowModel: getSortedRowModel()
    // } );
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