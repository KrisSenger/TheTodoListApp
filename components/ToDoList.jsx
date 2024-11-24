import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ToDoList({tasks}) {
  return (
    <View style={styles.completed}>
        {tasks.map((task, index) => (
          <View style={styles.task} key={index}>
            <View style={styles.taskText}>{task}</View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
  },
  completed: {
    backgroundColor: '#e0e0e0',
    width: 275,
  },
  taskText: {
    fontSize: 16,
  },
});