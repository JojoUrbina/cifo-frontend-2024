import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Sacar certificado digital",
      day: "Feb 9th at 1:30pm",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (task) => { 
    const id = new Date().getTime()
    const newTask = {id, ...task}
    setTask([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No hay mas tareas para mostrar"
      )}
    </div>
  );
}

export default App;
