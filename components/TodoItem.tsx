import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

import RemoveTodo from "./RemoveTodo";
import Complete from "./Complete";

// 할 일 항목의 타입 정의
type TodoItemProps = {
  item: {
    id: string;
    text: string;
  };
};

const TodoItem = ({ item }: TodoItemProps) => {
  const [lineThrough, setLineThrough] = useState<boolean>(false);
  return (
    <TouchableOpacity style={styles.todoItem}>
      <View style={styles.competeAndText}>
        <Complete setLineThrough={setLineThrough} />
        <Text style={lineThrough && styles.lineThrough}>{item.text}</Text>
      </View>
      <RemoveTodo id={item.id} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row", // 수평 방향으로 자식 요소들을 배열합니다.
    justifyContent: "space-between", // 자식 요소들 사이의 공간을 균등하게 배분합니다.
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  competeAndText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
  },
  lineThrough: {
    textDecorationLine: "line-through",
  },
});

export default TodoItem;
