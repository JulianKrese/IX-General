import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import categoryService from "../services/categoryService";

const initialState = {
  addCategory: null,
  editCategory: null,
  deleteCategory: null,
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      return await categoryService.fetchCategories();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetSuccessAndError: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setEditCategory: (state, { payload }) => {
      state.editCategory = payload;
      state.addCategory = null;
      state.deleteCategory = null;
    },
    setAddCategory: (state, { payload }) => {
      state.addCategory = payload;
      state.editCategory = null;
      state.deleteCategory = null;
    },
    setDeleteCategory: (state, { payload }) => {
      state.deleteCategory = payload;
      state.addCategory = null;
      state.editCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.data;
        // state.isSuccess = true;
        state.isLoading = false;
        state.message = payload.message;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.message = payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset, resetSuccessAndError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
