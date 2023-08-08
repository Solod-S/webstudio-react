import { createAsyncThunk } from '@reduxjs/toolkit';
import * as portfolioAPI from '../../service/API/portfolioAPI';

export const fetchPortfolio = createAsyncThunk(
  'portfolio/',
  async (_, thunkAPI) => {
    try {
      const data = await portfolioAPI.fetchPortfolio();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
