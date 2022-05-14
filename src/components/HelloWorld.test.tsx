import { render } from "@testing-library/react-native";

import { HelloWorld } from "./HelloWorld";

test("it displays 'Hello World'", () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText(/Hello World/i)).toBeTruthy();
});
