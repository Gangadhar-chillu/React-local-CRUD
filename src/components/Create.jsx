import React, { useState } from "react";
import { createTask } from "../data/task";

function Create(props) {
    const [task, setTask] = useState({
        title: '',
        start: '',
        end :  '',
        desc:  '',
    })

    const readValue = (event) => {
        const {name, value} = event.target
        console.log("name =", name, "value", value);
        setTask({...task, [name] : value})
    }

    const submitHandler = async (event) =>{
        event.preventDefault(); // to avid page refresh
        // console.log(" new task =", task);
        await createTask(task)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-dark">Create</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="title">Task Title</label>
                                    <input type="text" name="title" id="title" value={task.title}  onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="start">Task Start Date</label>
                                    <input type="datetime-local" name="start" id="start" value={task.start} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="end">Task End Date</label>
                                    <input type="datetime-local" name="end" id="end" value={task.end} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="desc">Description</label>
                                    <textarea name="desc" id="desc" cols="30" rows="5" value={task.desc}  onChange={readValue} className="form-control" required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" className="btn btn-outline-success mt-2" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create