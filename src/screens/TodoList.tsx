import { StyleSheet, FlatList, View, Text } from "react-native";
import useSWR from "swr";

import { fetchWrapper } from "../util/fetchWrapper";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const baseUrl = "https://jsonplaceholder.typicode.com";

function useTodos() {
  return useSWR<Todo[]>("/todos", (path: string) => fetchWrapper.get(`${baseUrl}${path}`), {
    suspense: true,
  });
}
export function TodoList() {
  const { data: todos } = useTodos();

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.title}
        {item.completed && " ✔️"}
      </Text>
    </View>
  );
  return <FlatList keyExtractor={(item) => String(item.id)} data={todos} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "black",
    padding: 12,
  },
  completedItem: {
    color: "green",
  },
});
