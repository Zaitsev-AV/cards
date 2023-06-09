import { Button, createStyles } from "@mantine/core";
import { usePackList } from "features/packs/hooks/usePackList";

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

export const AddPackButton = () => {
    const { classes, theme } = useStyles();
    const {addNewPack} = usePackList()
    const onClickHandler = () => {
        addNewPack({name: "test"})
    };
    return (
        <Button
            fullWidth
            className={ classes.button }
            onClick={ onClickHandler }
        >
            <div className={ classes.label }>
                Add new Pack
            </div>
        </Button>
    );
};