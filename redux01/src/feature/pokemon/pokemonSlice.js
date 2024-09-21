import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users/' }),//https://pokeapi.co/api/v2/

  tagTypes: ['Pokemon'],

//   keepUnusedDataFor: 1,
//   refetchOnMountOrArgChange: 3000,
//   refetchOnFocus: true,
    // skip: false,
    // refetchOnReconnect: true,
  
    endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getAllBerry: builder.query({
        query: () => 'berry',
        transformErrorResponse: (response, meta, arg) => response.status,
        providesTags: (result, error, arg) =>   result  ? [...result.map(({ id }) => ({ type: 'Pokemon', id })), 'Pokemon'] : ['Pokemon'],
        keepUnusedDataFor: 10,
    }),
    getBerryById: builder.query({
        query: (id) => `berry/${id}`,
        transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
      keepUnusedDataFor: 6000,
    //  refetchOnMountOrArgChange: true ,
    //  skip:true
    }),
    getAllPhotos: builder.query({
        query: () => '',
        transformErrorResponse: (response, meta, arg) => response.status,
        providesTags: (result, error, arg) =>   result  ? [...result.map(({ id }) => ({ type: 'Pokemon', id })), 'Pokemon'] : ['Pokemon'],
    //   keepUnusedDataFor: 10,
    }),
    getPhotosById: builder.query({
        query: (id) => `${id}`,
        transformErrorResponse: (response, meta, arg) => response.status,
        invalidatesTags: ['Pokemon'],
      providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
    //   keepUnusedDataFor: 10,
    }),
    updatePost: builder.mutation({
        query: ({ id, ...patch }) => ({
          url: `post/${id}`,
          method: 'PATCH',
          body: patch,
        }),
        transformResponse: (response, meta, arg) => response.data,
        transformErrorResponse: (response, meta, arg) => response.status,
        invalidatesTags: ['Pokemon'],
        async onQueryStarted(
          arg,
          { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
        ) {},
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            extra,
            requestId,
            cacheEntryRemoved,
            cacheDataLoaded,
            getCacheEntry,
          }
        ) {},
    }),
  }),
})

export const { 
    useGetPokemonByNameQuery,
    useLazyGetAllBerryQuery,
    useGetBerryByIdQuery,
    useGetAllPhotosQuery,
    useGetPhotosByIdQuery } = pokemonApi
















// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

//   tagTypes: ['Pokemon'],

// //   keepUnusedDataFor: 1,
// //   refetchOnMountOrArgChange: 3000,
// //   refetchOnFocus: true,
//     skip: false,
//     refetchOnReconnect: true,
  
//     endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//     getAllBerry: builder.query({
//         query: () => 'berry',
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//       keepUnusedDataFor: 10,
//     }),
//     getBerryById: builder.query({
//         query: (id) => `berry/${id}`,
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//       keepUnusedDataFor: 6000,
//     //  refetchOnMountOrArgChange: true ,
//     //  skip:true
//     }),
//     updatePost: builder.mutation({
//         query: ({ id, ...patch }) => ({
//           url: `post/${id}`,
//           method: 'PATCH',
//           body: patch,
//         }),
//         transformResponse: (response, meta, arg) => response.data,
//         transformErrorResponse: (response, meta, arg) => response.status,
//         invalidatesTags: ['Pokemon'],
//         async onQueryStarted(
//           arg,
//           { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
//         ) {},
//         async onCacheEntryAdded(
//           arg,
//           {
//             dispatch,
//             getState,
//             extra,
//             requestId,
//             cacheEntryRemoved,
//             cacheDataLoaded,
//             getCacheEntry,
//           }
//         ) {},
//     }),
//   }),
// })

// export const { useGetPokemonByNameQuery, useLazyGetAllBerryQuery,useGetBerryByIdQuery } = pokemonApi











// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const pokemonApi = createApi({
//   reducerPath: 'postsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
 
//   tagTypes: ['Posts'],
 
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => 'posts',
//       providesTags: (result) => result  ?   [...result.map(({ id }) => ({ type: 'Posts', id })),
//             { type: 'Posts', id: 'LIST' },]: // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
//             [{ type: 'Posts', id: 'LIST' }],
//     }),
//     addPost: build.mutation({
//       query(body) {
//         return {
//           url: `post`,
//           method: 'POST',
//           body,
//         }
//       },
//       invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
//     }),
//     getPost: build.query({
//       query: (id) => `post/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Posts', id }],
//     }),
//     updatePost: build.mutation({
//       query(data) {
//         const { id, ...body } = data
//         return {
//           url: `post/${id}`,
//           method: 'PUT',
//           body,
//         }
//       },
//       invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
//     }),
//     deletePost: build.mutation({
//       query(id) {
//         return {
//           url: `post/${id}`,
//           method: 'DELETE',
//         }
//       },
//       invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
//     }),
//   }),
// })

// export const {
//   useGetPostsQuery,
//   useAddPostMutation,
//   useGetPostQuery,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = pokemonApi







// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

//   tagTypes: ['Pokemon'],

//   keepUnusedDataFor: 6000,
//   refetchOnMountOrArgChange: 3000,

//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//     getAllBerry: builder.query({
//         query: () => 'berry',
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//     }),
//     getBerryById: builder.query({
//         query: (id) => `berry/${id}`,
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//       keepUnusedDataFor: 6000,
//      refetchOnMountOrArgChange: true ,
//      skip:true
//     }),
//     updatePost: builder.mutation({
//         query: ({ id, ...patch }) => ({
//           url: `post/${id}`,
//           method: 'PATCH',
//           body: patch,
//         }),
//         transformResponse: (response, meta, arg) => response.data,
//         transformErrorResponse: (response, meta, arg) => response.status,
//         invalidatesTags: ['Pokemon'],
//         async onQueryStarted(
//           arg,
//           { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
//         ) {},
//         async onCacheEntryAdded(
//           arg,
//           {
//             dispatch,
//             getState,
//             extra,
//             requestId,
//             cacheEntryRemoved,
//             cacheDataLoaded,
//             getCacheEntry,
//           }
//         ) {},
//     }),
//   }),
// })

// export const { useGetPokemonByNameQuery, useLazyGetAllBerryQuery,useGetBerryByIdQuery } = pokemonApi












// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

//   tagTypes: ['Pokemon'],

//   keepUnusedDataFor: 6000,
//   refetchOnMountOrArgChange: 3000,

//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//     getAllBerry: builder.query({
//         query: () => 'berry',
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//     }),
//     getBerryById: builder.query({
//         query: (id) => `berry/${id}`,
//         transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
//       keepUnusedDataFor: 6000,
//      refetchOnMountOrArgChange: true ,
//      skip:true
//     }),
//   }),
// })

// export const { useGetPokemonByNameQuery, useLazyGetAllBerryQuery,useGetBerryByIdQuery } = pokemonApi