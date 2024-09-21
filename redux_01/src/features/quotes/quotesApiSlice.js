// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const quotesApiSlice = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),

//   reducerPath: "quotesApi",
//   tagTypes: ["Quotes"],

//   endpoints: build => ({
//     getQuotes: build.query({
// //      skip:(),
// //      total:(),
//       query: (limit = 10) => `?limit=${limit}`,
//       providesTags: (result, error, id) => [{ type: "Quotes", id }],
//     }),
//   }),
// })


// export const { useGetQuotesQuery } = quotesApiSlice