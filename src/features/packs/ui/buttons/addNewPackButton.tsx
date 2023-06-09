import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles( ( theme ) => ( {
    button: {
        width: "10%",
        position: "relative",
        transition: "background-color 150ms ease"
    },
    
    progress: {
        ...theme.fn.cover( -1 ),
        height: "auto",
        backgroundColor: "transparent",
        zIndex: 0
    },
    
    label: {
        position: "relative",
        zIndex: 1
    }
} ) );

export const AddNewPackBtn = () => {
    const { classes, theme } = useStyles();
    
    return (
        <Button
            fullWidth
            className={ classes.button }
            onClick={ () => {} }
        >
            <div className={ classes.label }>
                Add new Pack
            </div>
        </Button>
    );
};