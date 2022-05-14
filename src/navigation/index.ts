import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  TodoList: undefined;
};

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
