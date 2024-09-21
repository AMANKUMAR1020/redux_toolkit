import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const pokemonApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),

  reducerPath: "pokemonApi",
  tagTypes: ["Pokemon"],

  endpoints: build => ({
    getPokemon: build.query({
    //   query: (limit = 10) => `?limit=${limit}`,
    query: () => ({ url: `/api` }),
    // providesTags: (result, error, id) => [{ type: "Pokemon", id:"id" }],
    }),
  }),
})


export const { useGetPokemonQuery } = pokemonApiSlice