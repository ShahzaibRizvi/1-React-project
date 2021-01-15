import React from 'react'
import { Navbar } from 'react-bootstrap'
import {ContextProvider} from './context/Contextprovider'

const Navbar3 =()=>{
    const {register,user,loader,logout}=React.useContext(ContextProvider);
    const userRegister=()=>{
        register();
    }
    const userLogout=()=>{
        logout();
    }
    const checkuser=()=>{
        return !loader ? user ? <div className="navbar_links">
        <li><spna className="navbar_img"></spna></li>
        <li><button className="navbar--btn" onClick={userLogout}>Logout</button></li>
    </div>:<div className="navbar_links"><li><button className="navbar--btn"onClick={userRegister} >Register with Google
        </button></li></div>:"..."
    }
    return(
    <div className="navbar3">
        <div className="navbar_container">
            <div className="navbar_logo">
                Messenger
                {checkuser()}
            </div>
            
        </div>
    </div>
 )}
export default Navbar3;