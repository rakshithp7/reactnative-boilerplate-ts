import React from "react";
import { Counter } from "../components/Counter";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Counter />
    </SafeAreaView>
  );
};

export default HomeScreen;
