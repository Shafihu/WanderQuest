import { create } from "zustand";
import PlacesType from "@/types/placesType";

type FavoriteStore = {
  favorites: PlacesType[];
  addToFavorites: (item: PlacesType) => void;
  removeFromFavorites: (itemId: string) => void;
};

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  addToFavorites: (item) =>
    set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (itemId) =>
    set((state) => ({
      favorites: state.favorites.filter((x) => x._id !== itemId),
    })),
}));
