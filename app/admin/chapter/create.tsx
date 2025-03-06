import { Create, TextInput, SimpleForm, required } from "react-admin";

export const ChapterCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput 
                    source="title" 
                    validate={[required()]} 
                    label="Title" 
                />
                <TextInput 
                    source="imageSrc" 
                    validate={[required()]} 
                    label="Image Source" 
                />
            </SimpleForm>
        </Create>
    );
};
