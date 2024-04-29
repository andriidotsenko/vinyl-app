import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import VinylCard from "./VinylCard.jsx";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

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

  it("should render correctly with all data", () => {
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={() => {}}
          onClickInFavorites={() => {}}
          onImageClick={() => {}}
        />
      </BrowserRouter>
    );

    const titleElement = screen.getByText("Test Vinyl");
    expect(titleElement).toBeInTheDocument();
  });

  it("should have the ability to add to favorites", async () => {
    const onClickInCollection = vi.fn();
    const onClickInFavorites = vi.fn();
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
          onImageClick={() => {}}
        />
      </BrowserRouter>
    );

    const addToFavoritesButton = screen.getByLabelText("Wishlist button");
    await userEvent.click(addToFavoritesButton);
    expect(onClickInFavorites).toHaveBeenCalled();
  });

  it("should have the ability to add to collection", async () => {
    const onClickInCollection = vi.fn();
    const onClickInFavorites = vi.fn();
    render(
      <BrowserRouter>
        <VinylCard
          card={mockCard}
          inCollection={false}
          inFavorites={false}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
          onImageClick={() => {}}
        />
      </BrowserRouter>
    );

    const addToCollectionButton = screen.getByText("Add");
    await userEvent.click(addToCollectionButton);

    expect(onClickInCollection).toHaveBeenCalledWith(mockCard);

    await userEvent.click(addToCollectionButton);

    const updatedAddToCollectionButton = screen.queryByText("In collection");

    expect(updatedAddToCollectionButton).toBeDefined();
  });
});
