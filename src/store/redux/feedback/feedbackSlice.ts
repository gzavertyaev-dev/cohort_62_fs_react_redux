import { createAppSlice } from "store/createAppSlice"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: {
    like: (state: FeedbackInitialState) => {
      state.likes = state.likes + 1
    },
    dislike: (state: FeedbackInitialState) => {
      state.dislikes = state.dislikes + 1
    },
    // resetResults: (state: FeedbackInitialState) => {
    //   state.dislikes = 0
    //   state.likes = 0
    // },
    resetResults: () => feedbackInitialState,
  },
  selectors: {
    likes: (state: FeedbackInitialState) => {
      return state.likes
    },
    dislikes: (state: FeedbackInitialState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
