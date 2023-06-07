import React, { ChangeEvent, MouseEvent, useState } from "react";
import s from './EditableText.module.css'
import pencil from "assets/pencil.svg";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "common/hooks";

export type EditableTextPropsType = {
  text: string | undefined
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
  const disableEditMode = ( e: MouseEvent<HTMLButtonElement> ) => {
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
          <div className={s.inputGroup}>
            <label className={s.label}>Nickname</label>
          <input
          className={s.input}
            type="text"
                 value={ value }
                 onChange={ handleInputChange }
                 autoFocus
          />
         
          <button className={  `${s.saveBtn} ${s.saveBtn1}`} onClick={disableEditMode}>SAVE</button>
          { error && <span className={s.error}>{ error }</span> }
          </div>
        </>
        :
        <span className={s.text}
              onDoubleClick={ activateEditMode }>{ value } <img src={ pencil }
                                                                alt="pencil" /></span>
      }
    </div>
  
  );
};