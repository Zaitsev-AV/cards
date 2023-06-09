import React, { useState } from "react";
import { TextInput } from "@mantine/core";


export const TableHeader: React.FC = () => {
    const [search, setSearch] = useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        // setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));?
    };
    return (
        <div style={{display: "flex"}}>
            <TextInput
                style={{width: "45%"}}
                placeholder="Search by any field"
                mb="md"
                // icon={<IconSearch size="0.9rem" stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
        
        </div>
    );
};