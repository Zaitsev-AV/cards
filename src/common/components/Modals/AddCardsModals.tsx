import React, { ChangeEvent, useState } from "react";
import { Input, Modal, Select, useMantineTheme } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";
import { useCards } from "features/cards/hooks/useCards";

type AddCardsModalPropsType = {
    opened: boolean
    close: () => void
    title: string
    callback: ( question: string, answer: string ) => void
    packName?: string
    status?: boolean
}
export const AddCardsModals: React.FC<AddCardsModalPropsType> = ( props ) => {
    const { close,title, opened, callback, packName, status} = props
    const theme = useMantineTheme();
    const [ question, setQuestion ] = useState( packName ? packName : "" );
    const [ answer, setAnswer ] = useState( packName ? packName : "" );
    const data = [
        { value: "text", label: "Text" },
        { value: "image", label: "Image" },
        { value: "video", label: "Video" }
    ];
    const [ value, setValue ] = useState<string | null>( null );
    const onChangeQuestionInputHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.currentTarget;
        setQuestion( value );
    };
    const onChangeAnswerInputHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.currentTarget;
        setAnswer( value );
    };
    const callbackHandler = () => {
        callback( question, answer );
        close();
        setAnswer( "" );
        setQuestion( "" );
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
                    <p>Choose a question format</p>
                    <Select
                        placeholder="Pick one"
                        allowDeselect
                        creatable
                        data={ data }
                        value={ data[ 0 ].label }
                        onChange={setValue}
                    />
                    <p>Question</p>
                    <Input
                        styles={ ( theme ) => ( {
                            input: {
                                "&:focus-within": {
                                    borderColor: theme.colors.green[ 7 ]
                                }
                            }
                        } ) }
                        required
                        placeholder="Please enter a question"
                        value={ question }
                        onChange={ onChangeQuestionInputHandler }
                    />
                    <p>Answer</p>
                    <Input
                        styles={ ( theme ) => ( {
                            input: {
                                "&:focus-within": {
                                    borderColor: theme.colors.green[ 7 ]
                                }
                            }
                        } ) }
                        required
                        placeholder="Please enter a answer"
                        value={ answer }
                        onChange={ onChangeAnswerInputHandler }
                    />
                </div>
                
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