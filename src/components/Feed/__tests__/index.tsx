import { Feed } from "..";

import { render } from "$src/mocks/test-utils";

describe(Feed.name, () => {
  it("should render a feed", () => {
    const { getByText } = render(
      <Feed
        feed={{
          title: "Jest title",
          by: "anonymous",
          id: 234,
          score: 344,
          time: 1669819419,
          type: "story",
        }}
        rating={2}
      />
    );

    expect(getByText("Jest title")).toBeDefined();
    expect(getByText("by anonymous")).toBeDefined();
  });
});
