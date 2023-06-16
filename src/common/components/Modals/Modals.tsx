import React, { ChangeEvent, useState } from "react";
import { Checkbox, Input, Modal, useMantineTheme } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";

type ModalsPropsType = {
    opened: boolean
    close: () => void
    title: string
    callback: (name: string, checked: boolean)=> void
    packName?: string
    status?: boolean
}
export const Modals: React.FC<ModalsPropsType> = ( { opened, close, title, callback, packName, status } ) => {
    const theme = useMantineTheme();
    const [ value, setValue ] = useState( packName ? packName :"" );
    const [checked, setChecked] = useState(status ? status : false);
    const onChangeInputHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.currentTarget;
        setValue( value );
    };
    const callbackHandler = () => {
        callback(value, checked)
        close()
        setValue('')
        setChecked(false)
    };
    
    return (
        <>
            <Modal
                opened={ opened }
                onClose={ close }
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
                    <p><b>Name pack</b></p>
                    <Input
                        styles={ ( theme ) => ( {
                            input: {
                                "&:focus-within": {
                                    borderColor: theme.colors.green[ 7 ]
                                }
                            }
                        } ) }
                        required
                        placeholder="Please enter a package name"
                        value={ value }
                        onChange={ onChangeInputHandler }
                    />
                </div>
                <Checkbox
                    style={ { paddingTop: "15px", paddingBottom: "15px" } }
                    label="Private pack"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                />
                <div style={ { display: "flex", justifyContent: "space-between", margin: "10px" } }>
                    <ActionButton callback={ close }
                                  text={ "Cancel" }
                                  size={ "md" }
                                  color={ "#FCFCFC" } />
                    <ActionButton callback={ callbackHandler }
                                  text={ "Save" }
                                  size={ "md" }
                    />
                </div>
                {/* Modal content */ }
            </Modal>
        </>
    );
};