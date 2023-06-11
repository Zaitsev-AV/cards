import React from "react";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { RiFilterLine } from "react-icons/ri";

export const ResetAllFilters: React.FC = () => {
    const { handleResetAllFilters } = usePacksFiltration();
    return (
        <div>
                <RiFilterLine size={ 25 }
                              style={ { cursor: "pointer" } }
                              onClick={ handleResetAllFilters } />
        </div>
    );
};