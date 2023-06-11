import React, { ChangeEvent, useEffect, useState } from "react";
import s from 'features/packs/ui/table/tadle-filter-panel/TableFilterPanel.module.css'
import { TextInput } from "@mantine/core";
import { PackFilterButtons } from "features/packs/ui/buttons/PackFilterButtons";
import { Slider } from "features/packs/ui/Slider";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { useDebounce } from "common/hooks";
import { ResetAllFilters } from "features/packs/ui/buttons/ResetAllFilters";


export const TableFilterPanel: React.FC = () => {
    const [search, setSearch] = useState('');
    const {searchByList} = usePacksFiltration()
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
    };
    
    const debouncedSearchTerm = useDebounce(search, 500);

    useEffect(() => {
        searchByList(search)
    }, [debouncedSearchTerm]);
    return (
        <div className={s.wrapper}>
            <div style={{width: "50%", marginBottom: 0}}>
                <div>Search</div>
            <TextInput
                placeholder="Provide your text"
                mb="md"
                value={search}
                onChange={handleSearchChange}
            />
            </div>
            <div className={s.btnWrapper}>
                <div>Show packs cards</div>
                <PackFilterButtons/>
            </div>
            
            <Slider/>
            <ResetAllFilters/>
        </div>
    );
};