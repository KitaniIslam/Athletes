import { initialThemeModalState, ThemeModalState } from "./slices/theme";

export interface GlobalStoreState {
  themeReducer: ThemeModalState;
}

export const initialStoreState = Object.freeze<GlobalStoreState>({
  themeReducer: initialThemeModalState,
});
