import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AddTodo from "./AddTodo";

type Props = {
  todos: {
    id: string;
    text: string;
  }[];
};

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  // 각 할 일 항목을 렌더링하는 함수
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => (
    <TodoItem item={item} />
  );

  return (
    <>
      <AddTodo />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TodoList;
