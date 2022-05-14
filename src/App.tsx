import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { SuspenseWrapper } from "./components/SuspenseWrapper";
import { RootStackParamList } from "./navigation";
import { Home } from "./screens/Home";
import { TodoList } from "./screens/TodoList";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <SuspenseWrapper>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="TodoList" component={TodoList} />
          </RootStack.Navigator>
        </SuspenseWrapper>
      </ErrorBoundary>
    </NavigationContainer>
  );
}
