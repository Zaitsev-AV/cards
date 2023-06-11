import React from "react";
import { FaFilter } from 'react-icons/fa';
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { RiFilterLine, RiFilterOffFill } from "react-icons/ri";
export const ResetAllFilters: React.FC = () => {
    const {handleResetAllFilters} = usePacksFiltration()
    return (
        <div>
            <RiFilterLine size={25} style={{ paddingLeft: "20px", cursor: "pointer"}}/>
            
            <RiFilterOffFill size={25} style={{ paddingLeft: "20px", cursor: "pointer"}}/>
            <FaFilter size={20} style={{color: "blue", paddingLeft: "20px", cursor: "pointer"}} onClick={handleResetAllFilters}/>
        </div>
    );
};
//GoFilter iconify/react