import React from 'react';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { SafeAreaView, View, Alert, StyleSheet } from 'react-native-web';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry',
                                      'Go to gym',
                                      'Walk dog'])

  const addTask = (taskText) => {
    if  (!tasks.includes(taskText))
      setTasks([...tasks, taskText]);
    else if (tasks.includes(taskText))
      alert('Task already exists');
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
            <ToDoList tasks={tasks} style={styles.list}/>
            <ToDoForm addTask={addTask}/>
        </View>
      </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    marginBottom: 20,
  },
});