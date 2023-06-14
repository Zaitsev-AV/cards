import React from "react";
import s from "features/packs/ui/table/tadle-filter-panel/TableFilterPanel.module.css";
import { TextInput } from "@mantine/core";
import { PackFilterButtons } from "features/packs/ui/buttons/PackFilterButtons";
import { Slider } from "features/packs/ui/Slider";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { ResetAllFilters } from "features/packs/ui/buttons/ResetAllFilters";
import { useSearch } from "common/hooks/useSearch";


export const TableFilterPanel: React.FC = () => {
    const {searchByList} = usePacksFiltration()

    const {search, handleSearchChange} = useSearch(searchByList)
    return (
        <div className={s.wrapper}>
            <div style={{width: "50%", marginBottom: 0}}>
                <div style={{marginBottom: "10px"}}>Search</div>
            <TextInput
                placeholder="Provide your text"
                mb="md"
                value={search}
                onChange={handleSearchChange}
            />
            </div>
            <div className={s.btnWrapper}>
                <div style={{marginBottom: "10px"}}>Show packs cards</div>
                <PackFilterButtons/>
            </div>
            <div className={s.sliderWrapper}>
                <div style={{marginBottom: "10px"}}>Number of cards</div>
            <Slider/>
            </div>
            <ResetAllFilters/>
        </div>
    );
};