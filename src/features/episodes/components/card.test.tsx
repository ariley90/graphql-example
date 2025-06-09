import type { Mock } from "vitest";

import {
  renderWithProviders,
  screen,
  waitForElementToBeRemoved,
} from "@/testing/testUtils";
import { EpisodeCard } from "./card";
import { Suspense } from "react";

beforeAll(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  (console.error as Mock).mockRestore();
});

test("when episode exists", { timeout: 10000 }, async () => {
  await renderWithProviders(
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeCard id="1" />
    </Suspense>
  );

  await waitForElementToBeRemoved(screen.queryByText("Loading..."), {
    timeout: 4000,
  });
  screen.getByRole("heading", {
    name: "cernuus",
  });
  const paragraphs = screen.getAllByRole("paragraph");
  expect(paragraphs[0]).toHaveTextContent("Episode: sublime");
  expect(paragraphs[1]).toHaveTextContent("Air Date: tendo");
  expect(paragraphs[2]).toHaveTextContent("Created: amplitudo");
});

test("when no episode exists", { timeout: 10000 }, async () => {
  await renderWithProviders(
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeCard id="10" />
    </Suspense>
  );

  // await waitForElementToBeRemoved(screen.queryByText("Loading..."), {
  //   timeout: 4000,
  // });
  screen.getByRole("heading", {
    name: "Episode Details",
  });
  const paragraphs = screen.getAllByRole("paragraph");
  expect(paragraphs[0]).toHaveTextContent("No episode data found.");
});
