import React, { useState, SetStateAction, Dispatch } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import { removeTodo as removeTodoAction } from "../store/todoSlice";

const Complete = ({
  setLineThrough,
}: {
  setLineThrough: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleCompleteToggle = () => {
    setLineThrough((prev) => !prev);
  };
  return (
    <Text style={[styles.removeTodo]} onPress={handleCompleteToggle}>
      완료
    </Text>
  );
};
const styles = StyleSheet.create({
  removeTodo: {
    padding: 1,
    textAlign: "center", // 텍스트를 중앙 정렬합니다.
  },
});
export default Complete;
