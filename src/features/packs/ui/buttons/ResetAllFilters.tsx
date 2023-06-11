import React from "react";
import { FaFilter } from 'react-icons/fa';
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
export const ResetAllFilters: React.FC = () => {
    const {handleResetAllFilters} = usePacksFiltration()
    return (
        <div>
            <FaFilter size={20} style={{color: "blue", paddingLeft: "20px", cursor: "pointer"}} onClick={handleResetAllFilters}/>
        </div>
    );
};
//GoFilter iconify/react