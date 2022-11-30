import Home from "../Home";

import { server } from "$src/mocks/server";
import {
  AllTheProviders,
  render,
  waitForElementToBeRemoved,
} from "$src/mocks/test-utils";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(Home.name, () => {
  it("should render in loading state", () => {
    const { asFragment, getAllByTestId } = render(<Home />, {
      wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getAllByTestId("skeleton").length).toBe(10);
  });

  it("should render the list elements", async () => {
    const { asFragment, getAllByText, getAllByTestId } = render(<Home />, {
      wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
    });

    await waitForElementToBeRemoved(getAllByTestId("skeleton"));

    expect(asFragment()).toMatchSnapshot();
    expect(getAllByText("104 points").length).toBe(10);
  });
});
