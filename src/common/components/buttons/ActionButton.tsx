import React from "react";
import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles( ( theme ) => ( {
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
}

export const ActionButton: React.FC<ActionButtonPropsType> = ( props ) => {
    const { callback, text } = props;
    const { classes, theme } = useStyles();
    
    return (
        <div>
            <Button
                fullWidth
                className={ classes.button }
                onClick={ callback }
            >
                <div className={ classes.label }>
                    { text }
                </div>
            </Button>
        </div>
    );
};