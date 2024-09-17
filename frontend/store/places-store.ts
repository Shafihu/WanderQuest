import { create } from "zustand";
import PlacesType from "@/types/placesType";

type PlaceStore = {
  places: PlacesType[];
  fetchPlaces: () => void;
};

export const usePlacesStore = create<PlaceStore>((set) => ({
  places: [],
  fetchPlaces: async () => {
    try {
      const res = await fetch("http://172.20.10.2:3000/api/places");
      if (!res.ok) throw new Error("Network response was not ok");
      const data: PlacesType[] = await res.json();
      set(() => ({ places: data }));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  },
}));
