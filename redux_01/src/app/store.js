import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { pokemonApiSlice } from "../features/pokemon/quotesApiSlice";

const rootReducer = combineSlices(pokemonApiSlice)

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(pokemonApiSlice.middleware)
  },
  // preloadedState,
  // setupListeners(store.dispatch)
})





// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch







// import { combineSlices, configureStore } from "@reduxjs/toolkit"
// import { setupListeners } from "@reduxjs/toolkit/query"
// import { counterSlice } from "../features/counter/counterSlice"
// import { quotesApiSlice } from "../features/quotes/quotesApiSlice"

// const rootReducer = combineSlices(counterSlice, quotesApiSlice)

// export const makeStore = preloadedState => {
//   const store = configureStore({

//     reducer: rootReducer,

//     middleware: getDefaultMiddleware => {
//       return getDefaultMiddleware().concat(quotesApiSlice.middleware)
//     },
//     preloadedState,
//   })
//   setupListeners(store.dispatch)
//   return store
// }

// export const store = makeStore()
