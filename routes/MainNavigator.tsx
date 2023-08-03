import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
