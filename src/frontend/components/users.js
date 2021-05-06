import * as React from "react";
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    ReferenceInput,
    SelectInput,
    // ImageField,
    // ImageInput
} from "react-admin";

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="email" alwaysOn />
        <ReferenceInput label="name" source="id" reference="Prof" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="university" />
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false} />
        </Datagrid>
    </List>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="university" />
            <TextField source="about" />
            <TextField source="achievements" />
            <TextField source="address" />
            <TextField source="contact" />
            <TextField source="courses" />
            <TextField source="publication" />
            <TextField source="researchwork" />
            <TextField source="specialization" />
            <TextField source="experience" />
            <TextField source="year" />
            <TextField source="facebook" />
            <TextField source="twitter" />
            <TextField source="linkedin" />
            <TextField source="instagram" />
            {/* <ImageField source="img.src" alt="no-pic" /> */}
        </SimpleShowLayout>
    </Show>
);

export const UserCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="university" />
            <TextInput source="about" />
            <TextInput source="achievements" />
            <TextInput source="address" />
            <TextInput source="contact" />
            <TextInput source="courses" />
            <TextInput source="publication" />
            <TextInput source="researchwork" />
            <TextInput source="specialization" />
            <TextInput source="experience" />
            <TextInput source="year" />
            <TextInput source="facebook" />
            <TextInput source="twitter" />
            <TextInput source="linkedin" />
            <TextInput source="instagram" />
            {/* <ImageInput source="img" accept="image/*">
                <ImageField source="img" />
            </ImageInput> */}
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="university" />
            <TextInput source="about" />
            <TextInput source="achievements" />
            <TextInput source="address" />
            <TextInput source="contact" />
            <TextInput source="courses" />
            <TextInput source="publication" />
            <TextInput source="researchwork" />
            <TextInput source="specialization" />
            <TextInput source="experience" />
            <TextInput source="year" />
            <TextInput source="facebook" />
            <TextInput source="twitter" />
            <TextInput source="linkedin" />
            <TextInput source="instagram" />
            {/* <ImageInput source="img" accept="image/*">
                <ImageField source="Profile.jpg" />
            </ImageInput> */}
        </SimpleForm>
    </Edit>
);