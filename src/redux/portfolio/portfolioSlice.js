import { createSlice } from '@reduxjs/toolkit';
import * as portfolioOperation from '../portfolio/portfolioOperation';

const initialState = { data: [], isRefreshing: false };

const PortfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(portfolioOperation.fetchPortfolio.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        portfolioOperation.fetchPortfolio.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          state.isRefreshing = false;
        }
      )
      .addDefaultCase(state => {
        state.isRefreshing = false;
      }),
});

export default PortfolioSlice.reducer;
