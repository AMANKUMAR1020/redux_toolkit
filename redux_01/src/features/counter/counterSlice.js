import { createAppSlice } from "../../app/createAppSlice"
import { fetchCount } from "./counterAPI"

const initialState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  
  reducers: create => ({

    increment: create.reducer(state => {
      state.value += 1
    }),

    decrement: create.reducer(state => {
      state.value -= 1
    }),

    incrementByAmount: create.reducer((state, action) => {
      state.value += action.payload
    }),

    incrementAsync: create.asyncThunk(
      async amount => {
        const response = await fetchCount(amount)
        return response.data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value += action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})

export const { decrement, increment, incrementByAmount, incrementAsync } =  counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors

export const incrementIfOdd = amount => (dispatch, getState) => {
  const currentValue = selectCount(getState())

  if (currentValue % 2 === 1 || currentValue % 2 === -1) {
    dispatch(incrementByAmount(amount))
  }
}