import AuthenticationINIT from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile, createUserWithEmailAndPassword,signInWithEmailAndPassword,getIdToken, signOut } from 'firebase/auth'
import { useEffect, useState } from "react"
import { setLogLevel } from "@firebase/app"


AuthenticationINIT()
const UseFirebase = () => {
    const [user, setUser] = useState()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [token,setToken]=useState(' ')
    const [admin,setAdmin]=useState(false)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
   

    const SignInWithGoogle = (navigate, redirect_URI) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
                saveUser(user.displayName,user.email,'PUT')
                setError('')
                navigate(redirect_URI)
                
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            })
            .finally(() => {
                setIsLoading(false)
            })
            ;
    }
    const registerUser = (name, email, password, navigate) => {
        setIsLoading(true)
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                 
                saveUser(name,email,'POST')
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    
                })
                setError('')
                navigate('/home')
              
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                  setError(errorMessage)
            }).finally(() => {
                setIsLoading(false)
            })

    }

    const loginUser = (email, password,navigate,redirect_URI) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setError('')
               
                   navigate(redirect_URI)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => {
                setIsLoading(false)
            })
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setIsLoading(false)
            setError('')
            setUser({})
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
        setIsLoading(false)
    }


    const saveUser=(name,email,method)=>{
        console.log(name,email)
        const user={name,email}
        fetch(`https://sheltered-beyond-04487.herokuapp.com/users`,{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)

        })
    }

    useEffect(()=>{
        fetch(`https://sheltered-beyond-04487.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data?.admin))
    },[user?.email])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribe
    }, [])


    return {
        user,
        error,
        admin,
        token,
        isLoading,
        setIsLoading,
        loginUser,
        SignInWithGoogle,
        registerUser,
        logOut


    }

}

export default UseFirebase;