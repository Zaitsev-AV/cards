import React from "react";
import { Paper, Text } from "@mantine/core";
import { ActionButton } from "common/components/buttons/ActionButton";


export const Learn: React.FC = () => {
    
    return (
        <div>
            <h1>Learn “Pack Name Сюда имя пака”</h1>
            <Paper shadow="lg"
                   p="sm">
                <Text style={ { padding: "15px" } }> <b>Question:</b> Paper is the most basic ui component</Text>
                <Text style={ { opacity: "0.5", padding: "15px" } }>
                    Количество попыток ответов на вопрос:??????????
                </Text>
                <ActionButton callback={ () => {
                } }
                              text={ "Snow answer" }
                              size={ "md" } />
            </Paper>
        </div>
    );
};