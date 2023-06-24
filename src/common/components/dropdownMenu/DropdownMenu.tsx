import React from "react";
import { ActionIcon, Menu, rem } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { MdDeleteOutline, MdModelTraining } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


export const DropdownMenu: React.FC = () => {
    
    //todo этот код нужно будет убрать отсюда
    const navigate = useNavigate()
    
    const onClickHandler = () => {
        navigate('/learn')
    };
    
    return (
        <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
                <ActionIcon>
                    <IconDots size="1rem" />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<TbPencilMinus size={rem(14)} />}>Edit</Menu.Item>
                <Menu.Item icon={<MdModelTraining size={rem(14)} />} onClick={onClickHandler}>Learn</Menu.Item>
                <Menu.Item icon={<MdDeleteOutline size={rem(14)} />} color="red">
                    Delete
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};