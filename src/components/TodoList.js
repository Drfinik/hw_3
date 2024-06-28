import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className='task-form'>
      <div className='new-task'>
      <TextField 
        label="Новая задача" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' ? addTask() : null}
      />
      <Button variant="contained" color="primary" onClick={addTask}>Добавить задачу</Button>
      </div>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <IconButton onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;