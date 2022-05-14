import { render } from "@testing-library/react-native";

import { ErrorBoundary } from "./ErrorBoundary";

test("it renders a fallback when catching an error", () => {
  const ErrorComponent = () => {
    throw new Error("An error thrown in child component");
  };
  const { getByText } = render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  );
  expect(getByText(/Something went wrong/i)).toBeTruthy();
});
