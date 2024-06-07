import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './RenderItem';

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState('');

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(value));
    } catch (e) {
      console.error('Error saving data', e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tasks');
      if (value !== null) {
        const taskLocal: Task[] = JSON.parse(value);
        setTasks(taskLocal);
      }
    } catch (e) {
      console.error('Error reading value', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(tasks);
  }, [tasks]);

  const markDone = (task: Task) => {
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.title === task.title ? { ...t, done: !t.done } : t
      )
    );
  };

  const addTask = () => {
    if (!text.trim()) return;

    const newTask: Task = {
      title: text,
      done: false,
      date: new Date(),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setText('');
  };

  const deleteTask = (task: Task) => {
    setTasks(prevTasks => prevTasks.filter(t => t.title !== task.title));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks to do</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={text}
          placeholder="Add new task"
          onChangeText={setText}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <RenderItem
            item={item}
            markDone={markDone}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={item => item.title}
        style={styles.scrollContainer}
      />
    </View>
  );
};

export default App;
