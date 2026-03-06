import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  appliedFilter: { field: '', uniqueVal: '' },
  selectField: null as string | null,
  selectValue: '',
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<string | null>) => {
      state.selectField = action.payload;
      state.selectValue = '';
    },
    changeValue: (state, action: PayloadAction<string>) => {
      state.selectValue = action.payload;
    },
    handleFilterButton: (state) => {
      if (state.selectField && state.selectValue) {
        state.appliedFilter = { field: state.selectField, uniqueVal: state.selectValue };
      }
    },
    handleAllButton: (state) => {
      state.appliedFilter = { field: '', uniqueVal: '' };
      state.selectField = null;
      state.selectValue = '';
    },
  },
});

export const { changeField, changeValue, handleFilterButton, handleAllButton } = FilterSlice.actions;

export default FilterSlice.reducer;
