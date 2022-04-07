import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/Game/gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer
  },
})