import { create } from "zustand";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;
const useLocationStore = create((set) => ({
  activeLocation: DEFAULT_LOCATION,

  setActiveLocation: (location) => {
    if (location === undefined) return;

    set(() => ({
      activeLocation: location,
    }));
  },

  resetActiveLocation: () =>
    set(() => ({
      activeLocation: DEFAULT_LOCATION,
    })),
}));

export default useLocationStore;
