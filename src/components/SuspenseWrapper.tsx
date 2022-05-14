import { Suspense } from "react";
import { View, Text, StyleSheet } from "react-native";

export function SuspenseWrapper(props: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{props.children}</Suspense>;
}

function LoadingFallback() {
  return (
    <View style={styles.fallback}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
