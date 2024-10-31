import React from 'react';
import {SafeAreaView, StyleSheet, View, Pressable, Text, ScrollView} from 'react-native';

export default function ToDoList({tasks}) {
  return (
    <li>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
    </li>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});