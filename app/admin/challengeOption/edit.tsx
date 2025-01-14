import { Edit, TextInput, SimpleForm, required, ReferenceInput, BooleanInput, NumberInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                {/*<NumberInput 
                    source="id" 
                    validate={[required()]} 
                    label="id" 
                /> */}
                <TextInput 
                    source="text" 
                    validate={[required()]} 
                    label="Text" 
                />
                <BooleanInput
                    source="correct"
                    label="Correct Option"
                />
                <ReferenceInput 
                    source="challengeId"
                    reference="challenges"
                />
                <TextInput
                    source="imageSrc"
                    validate={[required()]}
                    label="Image URL"
                />
                <TextInput
                    source="audioSrc"
                    validate={[required()]}
                    label="Audio URL"
                />
            </SimpleForm>
        </Edit>
    );
};
