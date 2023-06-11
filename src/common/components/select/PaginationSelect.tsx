import React from "react";
import { Select, SelectStylesNames, Styles } from "@mantine/core";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";


export const PaginationSelect: React.FC = () => {
    
    const {pageCount, handleSelectChange} = usePacksFiltration()
    
    const selectStyles: Styles<SelectStylesNames> = {
        wrapper: {
            backgroundColor: "#f5f55",
            borderRadius: 4,
            borderColor: "#d9d9d9",
            "&:hover": {
                borderColor: "#40a9ff"
            }
        },
        dropdown: {
            backgroundColor: "#f5f5f5",
            borderRadius: 4,
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)"
        },
        item: {
            "&:hover": {
                backgroundColor: "#e6f7ff"
            }
        }
    };
    
    const data = [1, 5, 10, 25, 50, 75, 100].map( ( a ) => `${ a }` );
    
    return (
        <>
            
            <div style={ { width: "70px", height: "40px", margin: "15px" } }>
                <Select
                    data={ data }
                    value={ pageCount ? pageCount.toString() : '' }
                    onChange={ handleSelectChange }
                    placeholder={ pageCount ? pageCount.toString() : ''  }
                    styles={ selectStyles }
                    required
                />
            </div>
            
        </>
    );
};