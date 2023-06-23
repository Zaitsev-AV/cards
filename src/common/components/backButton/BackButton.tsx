import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";


export const BackButton: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <IoArrowBackSharp onClick={()=>navigate(-1)}/>
        </>
    );
};