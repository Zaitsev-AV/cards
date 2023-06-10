import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { PackFilterButtons } from "features/packs/ui/buttons/PackFilterButtons";
import { Slider } from "features/packs/ui/Slider";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";


export const TableHeader: React.FC = () => {
    const [search, setSearch] = useState('');
    const {searchByList} = usePacksFiltration()
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        searchByList(search)
        // setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));?
    };
    return (
        <div style={{display: "flex", alignItems: "center" }}>
            <TextInput
                style={{width: "45%"}}
                placeholder="Search by any field"
                mb="md"
                value={search}
                onChange={handleSearchChange}
            />
            <PackFilterButtons/>
            <Slider/>
        </div>
    );
};