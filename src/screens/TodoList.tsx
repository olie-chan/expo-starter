import { StyleSheet, FlatList, View, Text } from "react-native";

import { fetchWrapper } from "../util/fetchWrapper";
import { wrapPromise } from "../util/wrapPromise";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
const todosResource = wrapPromise<Todo[]>(fetchWrapper.get(todosEndpoint));

export function TodoList() {
  const todos = todosResource.read();

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.title}
        {item.completed && " ✔️"}
      </Text>
    </View>
  );
  return (
    <FlatList
      keyExtractor={(item) => String(item.id)}
      data={todos}
      renderItem={renderItem}
    />
  );
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
