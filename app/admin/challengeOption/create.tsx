import { Create, TextInput, SimpleForm, required, ReferenceInput, BooleanInput, SelectInput } from "react-admin";

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
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
                    label="Challenges"
                >
                    <SelectInput optionText="question" /> {/* Use "id" if no other display field exists */}
                    </ReferenceInput>
                <TextInput
                    source="imageSrc"
                    label="Image URL"
                />
                <TextInput
                    source="audioSrc"
                    label="Audio URL"
                />
            </SimpleForm>
        </Create>
    );
};
