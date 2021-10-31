import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initAuthentication from '../Firebase/firebase-init';

initAuthentication();


const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);



    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    // clear error
    useEffect(() => {
        ClearError();
    }, [error]);

    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    // log out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // on auth state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        googleSignIn,
        logOut,
        isLoading
    }
};

export default useFirebase;