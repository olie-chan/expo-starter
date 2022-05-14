import {
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";

import { SuspenseWrapper } from "../components/SuspenseWrapper";
import { TodoList } from "./TodoList";

jest.useFakeTimers();

jest.mock("../util/fetchWrapper", () => ({
  fetchWrapper: {
    get: () =>
      Promise.resolve([
        {
          userId: 1,
          id: 1,
          title: "The first todo",
          completed: false,
        },
        {
          userId: 2,
          id: 2,
          title: "The second todo",
          completed: true,
        },
      ]),
  },
}));

test("renders the list of todos", async () => {
  const { getByText } = render(<TodoList />, {
    wrapper: SuspenseWrapper,
  });

  await waitForElementToBeRemoved(() => getByText(/Loading.../i));
  expect(getByText(/The first todo/i)).toBeTruthy();
  expect(getByText(/The second todo ✔️/i)).toBeTruthy();
});
