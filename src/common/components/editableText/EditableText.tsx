import React, { ChangeEvent, FocusEvent, useState } from "react";
import s from './EditableText.module.css'
import pencil from "assets/pencil.svg";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

export type EditableTextPropsType = {
  text: string | undefined
  callback: () => void
};
export const EditableText: React.FC<EditableTextPropsType> = ( props ) => {
  const { text } = props;
  const [ value, setValue ] = useState<string | undefined>( text );
  const [ editMode, setEditMode ] = useState<boolean>( false );
  const [ error, setError ] = useState<string | null>( null );
  const dispatch = useAppDispatch()
  
  const activateEditMode = () => {
    setEditMode( true );
  };
  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setValue( e.currentTarget.value );
  };
  const disableEditMode = ( e: FocusEvent<HTMLInputElement> ) => {
    if ( value ) {
      if ( value.trim() !== "" ) {
        dispatch(authThunks.upDateUser( { name: value.trim() }))
        setEditMode( false );
        setError( null )
        ;
      } else {
        setError( "Nickname in required" );
      }
    }
  };
  
  return (
    <div className={s.editableText}>
      { editMode
        ?
        <>
          <input type="text"
                 value={ value }
                 onChange={ handleInputChange }
                 autoFocus
                 onBlur={ disableEditMode }
          />
          { error && <span className={s.error}>{ error }</span> }
        </>
        :
        <span className={s.text}
              onDoubleClick={ activateEditMode }>{ value } <img src={ pencil }
                                                                alt="pencil" /></span>
      }
    </div>
  
  );
};