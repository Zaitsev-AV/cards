import React from "react";
import s from "features/profile/Profile.module.css";
import * as Avatar from "@radix-ui/react-avatar";
import avatar from "assets/user.png";
import iconPhoto from "assets/iconPhotoChange.svg";
import { EditableText } from "common/components/editableText/EditableText";
import { useAuth } from "features/auth/hooks/useAuth";
import { useProfile } from "features/profile/hooks/useProfile";

export const Profile: React.FC = () => {

    const {profileName,profileEmail} = useProfile()
    const { onLogOut } = useAuth();
    
    return (
        <div className={ s.wrapper }>
            <p className={ s.heading }>Personal Information</p>
            <div className={ s.avatarWrapper }>
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
        <EditableText text={ profileName } />
        {/*{ userName }*/}
      </span>
      <p className={ s.description }>{ profileEmail }</p>
      <button className={ s.button3 } onClick={onLogOut}>Log out</button>
    </div>
  );
};