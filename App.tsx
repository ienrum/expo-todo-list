import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainNavigator from "./routes/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;
