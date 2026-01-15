import { createAppSlice } from "store/createAppSlice"

const counterInintialState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения события слайса в redux devtools и создания type в action
  name: "COUNTER",
  // initialState - state, в котором мы прописываем значения по умолчанию
  initialState: counterInintialState,
  // reducers - это обьект, который содержит функции редьюсер, которыен в свою очередь будут изменять стейт
  reducers: {
    plus: state => {
      state.count = state.count + 1 // если state.count === 0, то state.count = 0 + 1
    },
    minus: state => {
      state.count = state.count - 1
    },
  },
  // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
  selectors: {
    count: state => {
      return state.count
    },
  },
})

// counterSlice сам создает actions для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions

// counterSliceSelectors - это данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const counterSliceSelectors = counterSlice.selectors
