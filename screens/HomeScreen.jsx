import { View, Button, StyleSheet, SafeAreaView, Pressable, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


function HomeScreen({navigation}) {
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
      <MainLayout>
        <SafeAreaView style={styles.container}>
          <Text style={styles.textHead}>The TO DO List</Text>
          <View style={styles.main}>
              
              <ToDoList tasks={tasks} style={styles.list}/>
              <ToDoForm addTask={addTask}/>
          </View>
        
          <View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
              Go to About
            </Pressable>
          </View>
        </SafeAreaView>
      </MainLayout> 
  )
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
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#ff33ff',
    padding: 10,
    width: 200,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default HomeScreen