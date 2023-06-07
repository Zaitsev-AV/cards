import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Описание функции useRedirect
 * @param path Принимаемы путь для перенаправления в виде строки,
 * @param state Состояние, при изменении состояния в глобальном стейте произойдет редирект пользователя.
 */
export const useRedirect = (path: string, state: null | boolean) => {
    const navigate = useNavigate()
    useEffect(()=> {
        if ( state ) {
            navigate(path)
        }
    }, [state])

}