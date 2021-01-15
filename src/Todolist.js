import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Listcom from './Listcom'
const TodoList = () => {
    const [item, setItem] = useState("")
    const [newitem,setNewItem]=useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const listofItem = ()=>{
setNewItem((preValue)=>{
    return [...preValue,item]
})
setItem("");
    }
    return (
        <>
            <div className="main_div mt-5">
                <div className="center_div">
                    <br />
                    <h1 className="h1todo">
                        TODO LIST
                    </h1>
                    <br>
                    </br>
                    <input type="text" value={item} className="inputtodo" placeholder="Additem" onChange={itemEvent}></input>
                    <Button className="btn ml-3 p-1 " onClick={listofItem}> 
                        <AddIcon className="btn1"></AddIcon>
                    </Button>
                    <br></br>
                    <ol>
                        { newitem.map((val,index) => {
                            return <Listcom key={index}text={val} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};
export default TodoList;