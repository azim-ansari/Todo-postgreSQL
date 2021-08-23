import React, {useEffect, useState} from 'react'

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description)
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description}
            await fetch(`http://localhost:5000/api/update-todo/${todo.todo_id}`,{
                method:"PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (error) {
            console.log("error:::", error);
        }
    }
    useEffect(()=>{

    },[])
    return (
        <div className="container">
            <button 
                type="button" className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}
                >Edit</button>
            <div className="modal fade" id={`id${todo.todo_id}`} role="dialog" onClick={()=>setDescription(todo.description)}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Change Description</h4>
                            <button
                                type="btn btn-danger" 
                                className="close" 
                                data-dismiss="modal" 
                                onClick={()=>setDescription(todo.description)}> &times; </button>
                        </div>
                        <div className="modal-body"> 
                            <input 
                                type="text" 
                                className='from-controll' 
                                placeholder="description" 
                                value={description} 
                                onChange={(e)=>(setDescription(e.target.value))}/>
                        </div>
                        <div className="row ml-5">
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-danger" 
                                    data-dismiss="modal"
                                    onClick={()=>setDescription(todo.description)}
                                    >
                                        Close
                                    </button>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-warning" 
                                    data-dismiss="modal" 
                                    onClick={e=>updateDescription(e)}
                                    >
                                        Change
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTodo
