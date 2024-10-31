import React from 'react';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry',
                                      'Go to gym',
                                      'Walk dog'])

  return (
    <main>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </main>
  );
}