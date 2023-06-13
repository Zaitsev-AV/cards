import { createStyles, RangeSlider, rem } from "@mantine/core";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";
import { useEffect, useState } from "react";

const useStyles = createStyles( ( theme ) => ( {
    label: {
        top: 0,
        height: rem( 28 ),
        lineHeight: rem( 28 ),
        width: rem( 34 ),
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        backgroundColor: "transparent"
    },
    
    thumb: {
        backgroundColor: theme.colors[ theme.primaryColor ][ 6 ],
        height: rem( 28 ),
        width: rem( 34 ),
        border: "none"
    },
    
    dragging: {
        transform: "translate(-50%, -50%)"
    }
} ) );

export const Slider = () => {
    const { classes } = useStyles();
    const { minCardsCount, maxCardsCount, handleSizePackChange } = usePacksFiltration();
    const [ values, setValues ] = useState<[ number, number ]>( [ 0, 100 ] );
    
    useEffect( () => {
        setValues( [ minCardsCount, maxCardsCount ] );
    }, [minCardsCount, maxCardsCount] );

    return <div style={ { width: "100%" } }>
        <RangeSlider labelAlwaysOn
                     defaultValue={ values }
                     classNames={ classes }
                     onChangeEnd={ handleSizePackChange }
                     value={values}
                     max={ values[1] }
                     min={ values[0] }
        />
    </div>;
};