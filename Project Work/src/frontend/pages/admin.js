import React from 'react'
import {
    FirebaseDataProvider,
    // FirebaseAuthProvider,
} from 'react-admin-firebase';
import app from '../../firebase'
import firebaseApp from '../../firebase.js'
// import { PostList, PostShow, PostCreate, PostEdit } from '../components/post';
import { UserList, UserShow, UserCreate, UserEdit } from '../components/users';
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/People';

// const authProvider = FirebaseAuthProvider(app);
const dataProvider = FirebaseDataProvider(app, {
    logging: true,

    app: firebaseApp,

    persistence: 'local',

    dontAddIdFieldToDoc: true,
    lazyLoading: {
        enabled: true,
    },
    firestoreCostsLogger: {
        enabled: true,
    },
});



export default function admin() {
    return (
        < Admin
            dataProvider={dataProvider}
        // authProvider={authProvider}
        >
            {/* < Resource
                name="posts"
                list={PostList}
                show={PostShow}
                create={PostCreate}
                edit={PostEdit}
            /> */}
            <Resource
                name="Prof"
                icon={UserIcon}
                list={UserList}
                show={UserShow}
                create={UserCreate}
                edit={UserEdit}
            />
        </Admin >
    );
}
