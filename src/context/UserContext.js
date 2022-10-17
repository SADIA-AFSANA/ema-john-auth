import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ Children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, createUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {Children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;