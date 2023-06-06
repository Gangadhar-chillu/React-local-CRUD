import { toast } from 'react-toastify';

const tasks = JSON.parse(localStorage.getItem("tasks")) || []

const ranId =  () => {
    return Math.floor(Math.random() * 1000)
}

// store the tasks
const createTask = async (task) => {
 try {
    const extTask = tasks.find((item) => item.title === task.title);
    if(extTask) {
        toast.warning('Task already exists.');
    } else {
        const newTask = {
            id: ranId(),
            ...task
        }
        tasks.push(newTask);
        saveTask(tasks);
        toast.success('New Task Created Successfully');
        window.location.href = `/`;
    }
 } catch (error) {
    toast.error(error.message);
 }    
}


// save the tasks
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data))
}

// read all the data
const readAllTask = () => {
    return tasks;
}

// read single task
const readSingleTask = (id) =>{
    const data = tasks.find((item) => item.id == id)
    return data;
}

// update logic
const updateTask = (id,task) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id);
        tasks.splice(taskIndex,1,task);
        saveTask(tasks)
        toast.success('Updated successfully');
        window.location.href = `/`;
    } catch (err) {
        toast.error(err.message)
    }
}

// delete logic
const deletTask = (id) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id)
        tasks.splice(taskIndex,1)
        saveTask(tasks)
        toast.success(`${id} deleted successfully`)
        window.location.href = `/`
    } catch (err) {
        toast.error(err.message)
    }
}

export { createTask, readAllTask , readSingleTask ,updateTask, deletTask }