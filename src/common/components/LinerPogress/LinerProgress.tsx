import React from "react";
import s from "./LinerProgress.module.css";

export const LinerProgress: React.FC = () => {
      
      return (
            <div className={ s.wrapper }>
                  <div className={ s.loader }></div>
            </div>
      );
};