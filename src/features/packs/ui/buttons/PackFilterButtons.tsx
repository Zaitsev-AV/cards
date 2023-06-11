import { Button, createStyles } from "@mantine/core";
import { usePacksFiltration } from "features/packs/hooks/usePacksFiltration";

const useStyles = createStyles( ( theme ) => ( {
    buttonMy: {
        width: "8%",
        position: "relative",
        backgroundColor: '#FFFFFF',
        color: "#000000",
        "&:hover": {
            backgroundColor:  '#1c4ccb',
            color: '#FFFFFF'
        }
    },
    buttonAll: {
        width: "8%",
        position: "relative",
        backgroundColor: '#366EFF',
        "&:hover": {
            backgroundColor:  '#1c4ccb'
        }
    },
    label: {
        position: "relative",
        zIndex: 1
    }
} ) );

export const PackFilterButtons = () => {
    const { classes, theme } = useStyles();
    
    const { showMyPacks, showAllPacks } = usePacksFiltration();
    return (
        <>
            <Button
                fullWidth
                className={ classes.buttonMy }
                onClick={ showMyPacks }>
                <div className={ classes.label }>
                    My
                </div>
            </Button>
            <Button
                fullWidth
                className={ classes.buttonAll }
                onClick={ showAllPacks }>
                <div className={ classes.label }>
                    All
                </div>
            </Button>
        </>
    );
};