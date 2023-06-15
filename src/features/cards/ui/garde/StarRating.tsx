import React from "react";
import { Rating } from "@mantine/core";

type StarRatingProps = {
    value: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ value }) => {

    return (
        <Rating fractions={5} defaultValue={value} readOnly/>
    );
};

