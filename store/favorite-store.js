import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  favorites: [],
  addToFavorites: (item) =>
    set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (itemId) =>
    set((state) => ({
      favorites: state.favorites.filter((x) => x.id !== itemId),
    })),
}));
