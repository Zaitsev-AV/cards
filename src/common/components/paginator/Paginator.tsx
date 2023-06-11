import React from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";


export const Paginator: React.FC = () => {
    // const [activePage, setActivePage] = useState(currentPage);
    // const totalCount = pages.length;
    // const startIndex = Math.max(1, activePage - Math.floor(pageLimit / 2));
    // const endIndex = Math.min(totalCount, startIndex + pageLimit - 1);
    
    const dispatch = useDispatch();
    const { page, pageCount, totalCount, handlePageChange } = usePacksFiltration();
    const pageLimit = pageCount ? pageCount : 10;
    const totalPageCount = Math.ceil( totalCount/pageLimit)
    

    const { active,  } = usePagination( { page, total: totalPageCount } );
    return (
        <>
            <Pagination value={active} total={ totalPageCount } defaultValue={active} onChange={handlePageChange}/>
        </>
    );
};
