import { Button, createStyles } from "@mantine/core";
import { usePackList } from "features/packs/hooks/usePackList";

const useStyles = createStyles( ( theme ) => ( {
    buttonMy: {
        width: "5%",
        position: "relative",
        backgroundColor: '#FFFFFF',
        color: "#000000"
    },
    buttonAll: {
        width: "5%",
        position: "relative",
        backgroundColor: '#366EFF'
    },
    
    progress: {
        ...theme.fn.cover( -1 ),
        height: "auto",
        zIndex: 0
    },
    
    label: {
        position: "relative",
        zIndex: 1
    }
} ) );

export const PackFilterButtons = () => {
    const { classes, theme } = useStyles();
    const {  } = usePackList();
    const onClickHandler = () => {
        // addNewPack( { name: "test" } );
    };
    return (
        <>
            <Button
                fullWidth
                className={ classes.buttonMy }
                onClick={ onClickHandler }
            >
                <div className={ classes.label }>
                    My
                </div>
            </Button>
            <Button
                fullWidth
                className={ classes.buttonAll }
                onClick={ onClickHandler }
            >
                <div className={ classes.label }>
                    All
                </div>
            </Button>
        </>
    );
};