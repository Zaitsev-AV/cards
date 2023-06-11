import React, { useEffect, useState } from "react";
import { TextInput } from "@mantine/core";
import { PackFilterButtons } from "features/packs/ui/buttons/PackFilterButtons";
import { Slider } from "features/packs/ui/Slider";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { useDebounce } from "common/hooks";
import { ResetAllFilters } from "features/packs/ui/buttons/ResetAllFilters";


export const TableFilterPanel: React.FC = () => {
    const [search, setSearch] = useState('');
    const {searchByList} = usePacksFiltration()
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        // searchByList(search)
        // setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));?
    };
    
    const debouncedSearchTerm = useDebounce(search, 500);

    useEffect(() => {
        searchByList(search)
    }, [debouncedSearchTerm]);
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
            <ResetAllFilters/>
        </div>
    );
};