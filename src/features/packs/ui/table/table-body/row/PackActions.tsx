import { TbPencilMinus } from "react-icons/tb";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { usePackList } from "features/packs/hooks/usePackList";

export const PackActions: React.FC<{ packId: string, open: ()=> void }> = ({ packId, open }) => {
    

    
    return (
        <>
            <MdDeleteOutline
                size={20}
                cursor="pointer"
                onClick={open}
            />
            <MdModelTraining size={20} cursor="pointer" />
            <TbPencilMinus size={20} cursor="pointer" onClick={open} />
        </>
    );
};