import { create } from "zustand";

interface State {
  currentState: "initial" | "filled";
  isLoading: boolean;
  setCurrentState: (state: "initial" | "filled") => void;
  setIsLoading: (loading: boolean) => void;
}

export const useStateStore = create<State>((set) => ({
  currentState: "initial",
  isLoading: false,
  setCurrentState: (state) => set({ currentState: state }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
