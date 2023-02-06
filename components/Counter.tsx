import { Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "../features/counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View className="flex-row items-center justify-center space-x-5">
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        className="w-50 bg-blue-400 p-5 rounded-full"
      >
        <Text className="font-bold">Decrement</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        className="w-50 bg-blue-400 p-5 rounded-full"
        onPress={() => dispatch(increment())}
      >
        <Text className="font-bold">Increment</Text>
      </TouchableOpacity>
    </View>
  );
}
