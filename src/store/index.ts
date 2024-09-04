import { configureStore, createSlice } from '@reduxjs/toolkit'


const todoSlide = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar React'],
  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlide.reducer
  }
})