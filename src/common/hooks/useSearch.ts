import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "common/hooks/useDebounce";

export const useSearch = (foo: Function) => {
    const [search, setSearch] = useState('');
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
    };
    
    const debouncedSearchTerm = useDebounce(search, 500);
    
    useEffect(()=> {
        foo(search)
    }, [debouncedSearchTerm])
    
    return {
        search,
        handleSearchChange
    }
    
};