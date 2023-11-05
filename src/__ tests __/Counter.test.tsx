import { render } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

const setup = () => {
  const { getByText, getByRole } = render(<Counter />);
  const incrementButton = getByRole("button", { name: /Increment/i });
  const decrementButton = getByRole("button", { name: /Decrement/i });
  const resetButton = getByRole("button", { name: /Reset/i });
  return {
    getByText,
    getByRole,
    incrementButton,
    decrementButton,
    resetButton,
  };
};

test("renders the Counter component with 0 count", () => {
  const { getByText } = setup();
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});

test("check for increment and decrement button", () => {
  const { incrementButton, decrementButton } = setup();
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test("increments and decrements the count", async () => {
  const { getByText, incrementButton, decrementButton } = setup();

  await userEvent.click(incrementButton);
  expect(getByText(/1/i)).toBeInTheDocument();

  await userEvent.click(decrementButton);
  expect(getByText(/0/i)).toBeInTheDocument();
});

test("check for Reset", async () => {
  const { incrementButton, resetButton, getByText } = setup();
  await userEvent.dblClick(incrementButton);

  await userEvent.click(resetButton);
  expect(getByText(/0/i)).toBeInTheDocument();
});
