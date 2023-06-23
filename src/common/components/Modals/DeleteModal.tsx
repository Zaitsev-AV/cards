import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";

type ModalsPropsType = {
    opened: boolean
    close: (openedDelete: boolean) => void
    title: string
    callback: ()=> void
    name?: string
}
export const DeleteModal: React.FC<ModalsPropsType> = ( { opened, close, title, callback, name,  } ) => {
    const theme = useMantineTheme();
    const callbackHandler = () => {
        callback()
        close(false)
    };
    
    return (
        <>
            <Modal
                opened={ opened }
                onClose={ ()=>close(false) }
                title={title}
                yOffset="20vh"
                xOffset={ 0 }
                transitionProps={{ transition: 'rotate-left' }}
                overlayProps={ {
                    color: theme.colorScheme === "dark" ? theme.colors.dark[ 9 ] : theme.colors.gray[ 2 ],
                    opacity: 0.55,
                    blur: 3
                } }
            >
                <div>
                    {`Do you really want to remove `}
                    <b>"{name}"</b>
                    {`? All cards will be deleted.`}
                </div>
                <div style={ { display: "flex", justifyContent: "space-between", margin: "10px" } }>
                    <ActionButton callback={ ()=>close(false) }
                                  text={ "Cancel" }
                                  size={ "md" }
                                  color={ "#FCFCFC" } />
                    <ActionButton callback={ callbackHandler }
                                  text={ "Delete" }
                                  size={ "md" }
                                  color={"#FF3636"}
                    />
                </div>
                {/* Modal content */ }
            </Modal>
        </>
    );
};