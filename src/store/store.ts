import { create } from "zustand";

interface State {
  currentState: "initial" | "filled";
  isLoading: boolean;
  isFinished: boolean;
  setCurrentState: (state: "initial" | "filled") => void;
  setIsLoading: (loading: boolean) => void;
  setIsFinished: (finished: boolean) => void;
}

export const useStateStore = create<State>((set) => ({
  currentState: "initial",
  isLoading: false,
  isFinished: false,
  setCurrentState: (state) => set({ currentState: state }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsFinished: (finished) => set({ isFinished: finished }),
}));
