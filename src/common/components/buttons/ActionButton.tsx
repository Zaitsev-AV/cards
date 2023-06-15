import React from "react";
import { Button, createStyles } from "@mantine/core";
import { MantineSize } from "@mantine/styles/lib/theme/types/MantineSize";

const useStyles = createStyles( (  ) => ( {
    button: {
        background: "#366EFF",
        position: "relative",
        boxShadow: "0px 4px 18px rgba(54, 110, 255, 0.35)", "inset 0px 1px 0px rgba(255, 255, 255, 0.3)": undefined,
        borderRadius: "30px"
    },
    
    label: {
        position: "relative",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        zIndex: 1
    }
} ) );
type ActionButtonPropsType = {
    callback: () => void
    text: string
    color?: string
    size?: MantineSize
}

export const ActionButton: React.FC<ActionButtonPropsType> = ( props ) => {
    const { callback, text, color, size } = props;
    const { classes } = useStyles();
    
    return (
        <div>
            <Button
                style={{backgroundColor: color}}
                fullWidth
                className={ classes.button }
                onClick={ callback }
                size={size ? size : '' }
            >
                <div className={ classes.label } style={{color: color ? "black" : "white"}}>
                    { text }
                </div>
            </Button>
        </div>
    );
};