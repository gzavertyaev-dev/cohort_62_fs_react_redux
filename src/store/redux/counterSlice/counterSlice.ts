import { PayloadAction } from "@reduxjs/toolkit"

import { createAppSlice } from "store/createAppSlice"

import { CounterSliceState } from "./types"

const counterInintialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения события слайса в redux devtools и создания type в action
  name: "COUNTER",
  // initialState - state, в котором мы прописываем значения по умолчанию
  initialState: counterInintialState,
  // reducers - это обьект, который содержит функции редьюсер, которыен в свою очередь будут изменять стейт
  reducers: {
    plus: (state: CounterSliceState) => {
      state.count = state.count + 1 // если state.count === 0, то state.count = 0 + 1
    },
    minus: (state: CounterSliceState) => {
      state.count = state.count - 1
    },
    multiply: (state: CounterSliceState, action: PayloadAction<number>) => {
      console.log(action)
      state.count = Number((state.count * action.payload).toFixed(3))
    },
    divide: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))
    },
  },
  // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

// counterSlice сам создает actions для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions

// counterSliceSelectors - это данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const counterSliceSelectors = counterSlice.selectors
