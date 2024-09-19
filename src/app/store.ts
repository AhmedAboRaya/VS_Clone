import { configureStore } from '@reduxjs/toolkit'
import treeSlice from './features/treeSlice'

export const store = configureStore({
  reducer: {
    tabs: treeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch