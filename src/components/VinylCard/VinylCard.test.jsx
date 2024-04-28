import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VinylCard from "./VinylCard.jsx";
import { BrowserRouter } from "react-router-dom";

class IntersectionObserverMock {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver = IntersectionObserverMock;

describe("VinylCard", () => {
  const mockCard = {
    id: 1,
    title: "Test Vinyl",
    artist: "Test Artist",
    year: 2020,
    country: { id: "test_country", title: "Test Country" },
    genre: { id: 1, title: "Test Genre" },
    image: "test_image.jpg",
  };
  const onClickInCollection = vi.fn();
  const onClickInFavorites = vi.fn();

  it("should render correctly with all data", () => {
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
        />
      </BrowserRouter>
    );

    const titleElement = screen.getByText("Test Vinyl");
    expect(titleElement).toBeInTheDocument();

    const artistElement = screen.getByText("Test Artist");
    expect(artistElement).toBeInTheDocument();

    const yearElement = screen.getByText("2020");
    expect(yearElement).toBeInTheDocument();

    const countryElement = screen.getByText("Test Country");
    expect(countryElement).toBeInTheDocument();

    const genreElement = screen.getByText("Test Genre");
    expect(genreElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Test Vinyl");
    expect(imageElement).toBeInTheDocument();
  });

  it("should have the ability to add to favorites", async () => {
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
        />
      </BrowserRouter>
    );

    const addToFavoritesButton = screen.getByTestId("add-to-favorites-button");
    await fireEvent.click(addToFavoritesButton);
    expect(onClickInFavorites).toHaveBeenCalled();
  });

  it("should have the ability to add to collection", async () => {
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
        />
      </BrowserRouter>
    );

    const addToCollectionButton = screen.getByText("Add");
    await fireEvent.click(addToCollectionButton);
    expect(onClickInCollection).toHaveBeenCalled();
  });
});
