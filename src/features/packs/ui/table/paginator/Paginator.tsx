import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import s from './Paginator.module.css'


export const Paginator: React.FC = () => {
    const [activePage, setActivePage] = useState(1);
    const { page, pageCount, totalCount, handlePageChange } = usePacksFiltration();
    
    useEffect(()=> {
        if ( page )
        setActivePage(+page)
    }, [page])
    
    const pageLimit = pageCount ? pageCount : 10;
    const totalPageCount = Math.ceil( totalCount/pageLimit)
    return (
        <div className={s.wrapper}>
            <Pagination value={activePage} total={ totalPageCount } onChange={handlePageChange}/>
        </div>
    );
};
