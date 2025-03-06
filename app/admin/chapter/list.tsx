import { Datagrid, List, TextField } from "react-admin";

export const ChapterList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="imageSrc" />
            </Datagrid>
        </List>
    )
};