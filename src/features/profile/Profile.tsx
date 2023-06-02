import React from "react";
import s from "features/profile/Profile.module.css";
import { useAppSelector } from "app/hooks";
import * as Avatar from "@radix-ui/react-avatar";
import avatar from "assets/user.png";
import iconPhoto from "assets/iconPhotoChange.svg";
import { EditableText } from "common/components/editableText/EditableText";

export type ProfilePropsType = {};
export const Profile: React.FC<ProfilePropsType> = ( props ) => {
  const {} = props;
  
  const userEmail = useAppSelector( state => state.auth.profile?.email );
  const userName = useAppSelector( state => state.auth.profile?.name );
  return (
    <div className={ s.wrapper }>
      <p className={ s.heading }>Personal Information</p>
      <div className={s.avatarWrapper}>
        <Avatar.Root className={ s.profileAvatarRoot }>
          <Avatar.Image
            className={ s.AvatarImage }
            src={ avatar }
            alt="User"
          />
          <img
            className={s.icon}
            src={ iconPhoto }
            alt="" />
        </Avatar.Root>
      </div>
      <span className={s.nameContainer}>
        <EditableText text={ userName } />
        {/*{ userName }*/}
      </span>
      
      <p className={ s.description }>{ userEmail }</p>
      <button className={ s.button3 }>Log out</button>
    </div>
  );
};