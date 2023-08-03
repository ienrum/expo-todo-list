import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import { removeTodo as removeTodoAction } from "../store/todoSlice";

const RemoveTodo = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: string) => {
    return () => dispatch(removeTodoAction(id));
  };

  return (
    <Text style={styles.removeTodo} onPress={handleRemoveTodo(id)}>
      삭제
    </Text>
  );
};
const styles = StyleSheet.create({
  removeTodo: {
    padding: 1,
    textAlign: "center", // 텍스트를 중앙 정렬합니다.
  },
});
export default RemoveTodo;
