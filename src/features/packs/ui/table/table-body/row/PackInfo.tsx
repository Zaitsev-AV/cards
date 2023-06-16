import { useCards } from "features/cards/hooks/useCards";
import { createStyles } from "@mantine/core";


const useStyles = createStyles(() => ({
    td: {
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
    }
}));
export const PackInfo: React.FC<{ name: string; packId: string, count: number }> = ( {
                                                                                  name,
                                                                                  packId,
                                                                                  count
                                                                              } ) => {
    const { fetchStudyCards } = useCards();
    const { classes } = useStyles();
    
    const handleFetchStudyCards = () => {
        fetchStudyCards( packId, count );
    };
    
    return (
        <td
            className={ classes.td }
            style={ { fontSize: "16px", cursor: "pointer" } }
            onClick={ handleFetchStudyCards }
        >
            { name.trim().length < 20 ? name : name.trim().slice( 0, 25 ) + "..." }
        </td>
    );
};