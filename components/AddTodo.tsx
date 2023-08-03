import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="새로운 할 일을 입력하세요..."
        onChangeText={setText}
        value={text}
      />
      <Button title="추가" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
  },
});

export default AddTodo;
