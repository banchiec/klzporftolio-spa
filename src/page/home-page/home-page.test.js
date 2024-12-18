import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { HomePage } from "./home-page";
import { QueryClient, QueryClientProvider } from "react-query";

test("renders content", () => {
  const queryClient = new QueryClient();

  const component = render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );

  console.log(component);
});
