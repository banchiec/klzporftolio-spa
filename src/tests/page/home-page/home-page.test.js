import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { HomePage } from "./home-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

jest.mock("./home-page");

test("renders content", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
});

describe("renders content", () => {
  test("check the home page route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );
  });
});
