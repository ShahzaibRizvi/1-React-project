import React,{createContext, useEffect,useState} from "react";
import {auth,db} from "../Config";
import firebase from "firebase"
export const ContextProvider= createContext();
const ContextFun=(props)=>{
    const [user,setUser]=useState(null);
    const[loader,setLoader]=useState(true);
    const register=()=>{
const Provider=new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(Provider).then((result)=>{

    firebase.auth().signInWithRedirect(Provider);
});
    }
const logout=()=>{
    auth.signOut().then(()=>{
        setUser(null);
    })
}
const sendMessage=(msg)=>{
db.collection("messages").add({
    msg,
    photo:user.photoURL,
    username:user.displayName,
    currentTime:firebase.firestore.FieldValue.serverTimestamp(),
})
}
    useEffect(()=>{
        auth.onAuthStateChanged((user) =>{
            setUser(user);
            setLoader(false);
        })
        //fetch messages from firebase
        db.collection("messages").orderBy("currentTime","desc").onSnapshot()
    },[])
    console.log(user)
    return (<ContextProvider.Provider value={{register,user,loader,logout,sendMessage}}>{props.children}</ContextProvider.Provider>
    )
    };
export default ContextFun;