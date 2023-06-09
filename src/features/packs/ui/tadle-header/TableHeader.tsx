import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { PackFilterButtons } from "features/packs/ui/buttons/PackFilterButtons";
import { Slider } from "features/packs/ui/Slider";


export const TableHeader: React.FC = () => {
    const [search, setSearch] = useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        // setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));?
    };
    return (
        <div style={{display: "flex", alignItems: "center" }}>
            <TextInput
                style={{width: "45%"}}
                placeholder="Search by any field"
                mb="md"
                // icon={<IconSearch size="0.9rem" stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <PackFilterButtons/>
            <Slider/>
        </div>
    );
};