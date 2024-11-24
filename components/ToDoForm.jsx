import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Button} from 'react-native';
import { useState } from 'react';


export default function ToDoForm({addTask}) {

  const [taskText, setTaskText] = useState('');

  handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  }

  return (
    

    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText}
          value={taskText}
        />
        <Button title="Add Task"
                onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});