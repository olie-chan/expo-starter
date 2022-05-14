import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

import { wrapPromise } from "../util/wrapPromise";
import { SuspenseWrapper } from "./SuspenseWrapper";

jest.useFakeTimers();

test("it shows a loading fallback", async () => {
  const resource = wrapPromise<string>(
    new Promise((resolve) => setTimeout(() => resolve("Finished!")))
  );
  const SuspenseChild = () => {
    const value = resource.read();
    return <Text>{value}</Text>;
  };
  const { getByText, findByText } = render(
    <SuspenseWrapper>
      <SuspenseChild />
    </SuspenseWrapper>
  );
  expect(getByText(/Loading.../i)).toBeTruthy();
  await expect(findByText(/Finished!/i)).toBeTruthy();
});
