import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { Task } from './App';

interface ItemProps {
  item: Task;
  markDone: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

const RenderItem: React.FC<ItemProps> = ({ item, markDone, deleteTask }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => markDone(item)}>
      <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
      <Text style={item.done ? styles.textDone : styles.text}>
        {item.date.toLocaleDateString()}
      </Text>
    </TouchableOpacity>
    {item.done && (
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => deleteTask(item)}
      >
        <Text style={styles.whiteText}>Delete</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default RenderItem;
