import { TTheme } from "@customTypes/Types";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeModalState = {
  currentTheme: TTheme;
};
export const initialThemeModalState: ThemeModalState = {
  currentTheme: "dark",
};

const setTheme: CaseReducer<
  ThemeModalState,
  PayloadAction<{ currentTheme: TTheme }>
> = (state, { payload }) => {
  return {
    ...state,
    currentTheme: payload.currentTheme,
  };
};

const themeSlice = createSlice({
  name: "loading",
  initialState: initialThemeModalState,
  reducers: {
    setTheme,
  },
});

export const themeReducer = themeSlice.reducer;
export const setThemeAction = themeSlice.actions.setTheme;
