import { useState } from 'react';
import { useGetAllPhotosQuery, useGetPhotosByIdQuery } from './pokemonSlice';
import { usePrefetch }
export default function Pokemon() {
    const [number, setNumber] = useState(2);
    const prefetchUser = usePrefetch('getUser')
    
    // Fetch all photos (optional based on your use case)
    const { data: allPhotos, error: allPhotosError, isLoading: isLoadingAll, isFetching: isFetchingAll } = useGetAllPhotosQuery();

    // Fetch photo by ID based on the current number state
    const { data: user, error: userError, isLoading: isLoadingUser, isFetching: isFetchingUser, refetch } = useGetPhotosByIdQuery(number);

    // Consolidate loading/error states
    const isLoading = isLoadingUser || isLoadingAll;
    const error = userError || allPhotosError;

    function handleRefetch() {
        refetch();
    }

//     const postHandle = (){
//         userNewPOst({userid, class}).unwrap()
//   .then((payload) => console.log('fulfilled', payload))
//   .catch((error) => console.error('rejected', error))
//     }

    // console.log(user);

    return (
        <>
            {error && <div>Error: {error.message}</div>}
            {isLoading && <div>Loading...</div>}
            {isFetchingUser && <div>Fetching user...</div>}

            <button onMouseEnter={() => prefetchUser(4, { ifOlderThan: 35 })}>
        Low priority
      </button>
      <button onMouseEnter={() => prefetchUser(4, { force: true })}>
        High priority
      </button>

            <div>
                <button onClick={handleRefetch}>Force re-fetch</button>
            </div>

            <button onClick={() => setNumber(number + 1)}>+</button>
            <button onClick={() => setNumber(number > 1 ? number - 1 : number)}>−</button>

            {user ? <p>{user.name}</p> : <p>No user data available</p>}

            {allPhotos && (
                <ul>
                    {allPhotos.map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}











// import { useState } from 'react';
// import { useGetAllPhotosQuery, useGetPhotosByIdQuery } from './pokemonSlice';
// // import { pokemonApi } from './pokemonSlice';

// export default function Pokemon() {
//     const [number, setNumber] = useState(2);
//     const user = null;
// //   const { data, error, isLoading, isFetching, refetch } = useGetAllPhotosQuery();
//    const {user = data, error, isLoading, isFetching, refetch } = useGetPhotosByIdQuery(2);
   
//     // const { data, error, isLoading, isFetching, refetch } = useGetBerryByIdQuery(number,
//     //     { 
//     //         //subscribe: false, 
//     //         //forceRefetch: true,
//     //          refetchOnMountOrArgChange: true
//     //      });
    

//     function handleRefetchOne() {
//         refetch();
//     }

//     function handleRefetchTwo() {
//         refetch();
//     }
//     console.log(user)

//     return (
//         <>
//             {error && <div>Error: {error.message}</div>}
//             {isLoading && <div>Loading...</div>}
//             {isFetching && <div>Fetching...</div>}

//             <div>
//                 <button onClick={handleRefetchOne}>Force re-fetch 1</button>
//                 <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
//             </div>

//             <button onClick={() => setNumber(number + 1)}>+</button>
//             <button onClick={() => setNumber(number > 1 ? number - 1 : number)}>−</button>

//             {data ? <p>{data.name}</p>: <p></p>}

//             {/* {data && (
//                 <ul>
//                     {data.map((item) => (
//                         <li key={item.id}>
//                             {item.name}
//                         </li>
//                     ))}
//                 </ul>
//             )}  */}

//             {/* {data && (
//                 <ul>
//                     {data.map((item) => (
//                         <li key={item.id}>
//                             <img
//                                 src={item.url} // Use 'item' instead of 'd'
//                                 alt={item.title} // Use 'alt' instead of 'placeholder'
//                                 width="100px"
//                                 height="100px"
//                             />
//                             <span>{item.title}</span>
//                         </li>
//                     ))}
//                 </ul>
//             )} */}

//         </>
//     );
// }

















// import { useState } from 'react';
// import { useGetBerryByIdQuery } from './pokemonSlice';
// // import { pokemonApi } from './pokemonSlice';

// export default function Pokemon() {
//     const [number, setNumber] = useState(2);
// //    const { data, error, isLoading, isFetching, refetch } = useGetBerryByIdQuery(number);
//     const { data, error, isLoading, isFetching, refetch } = useGetBerryByIdQuery(number,
//         { 
//             //subscribe: false, 
//             //forceRefetch: true,
//              refetchOnMountOrArgChange: true
//          });

//     function handleRefetchOne() {
//         refetch();
//     }

//     function handleRefetchTwo() {
//         refetch();
//     }

//     return (
//         <>
//             {error && <div>Error: {error.message}</div>}
//             {isLoading && <div>Loading...</div>}
//             {isFetching && <div>Fetching...</div>}

//             <div>
//                 <button onClick={handleRefetchOne}>Force re-fetch 1</button>
//                 <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
//             </div>

//             <button onClick={() => setNumber(number + 1)}>+</button>
//             <button onClick={() => setNumber(number > 1 ? number - 1 : number)}>−</button>

//             {data && (
//                 <div>
//                     <strong>Firmness:</strong> {data.firmness.name} <br />
//                     <strong>URL:</strong> {data.firmness.url} <br />
//                     <strong>Flavors:</strong>
//                     <ul>
//                         {data.flavors.map((flavor) => (
//                             <li key={flavor.flavor.name}>{flavor.flavor.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </>
//     );
// }











// import { useState } from 'react'
// import { useGetBerryByIdQuery } from './pokemonSlice'
// import { pokemonApi } from './pokemonSlice';
// // import {refetchOnMountOrArgChange } 
// export default function Pokemon() {
//     const [number,setNumber] = useState(2);
//     //const { data, error, isLoading,isFetching } = useGetBerryByIdQuery(number)
//     //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
//     // const { data, error, isLoading } = pokemonApi.endpoints.getBerryById.useQuery(number)
    
//     const { data,error, isLoading,isFetching, refetch } = useGetBerryByIdQuery(number)

//     console.log(data)

//     function handleRefetchOne() {
//       refetch()
//     }
//     const [val, ] =  pokemonApi.endpoints.useGetBerryByIdQuery.initiate(number,{subscribe: false,forceRefetch: true},)
//     console.log(val)
    
//     function handleRefetchTwo() {
//     }

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {isFetching ? <div>Fetching..</div> : <div></div>}

//   <div>
//     <button onClick={handleRefetchOne}>Force re-fetch 1</button>
//     <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
//   </div>
  
//    <button onClick={()=>{setNumber( number + 1)}}>+</button>
//   <button onClick={()=>{setNumber( number === 0 ?  number - 1 : 1)}}>-</button>
// {/*
//   {data ? <div>
//     &ldquo;{data.firmness.name}&ldquo;
//     {data.firmness.url}

//     {data.flavors.map((d)=>
//         <div key={d.flavor.name}>
//             {d.flavor.name}
//         </div>
//     )}
//     </div> : <div></div>} */}

//   </>)
// }














// import { useState } from 'react'
// import { useGetBerryByIdQuery } from './pokemonSlice'
// import { useAddPostMutation } from './pokemonSlice';
// // import {refetchOnMountOrArgChange } 
// export default function Pokemon() {
//     const [number,setNumber] = useState(2);
//     const { data, error, isLoading,isFetching } = useGetBerryByIdQuery(number)
//     //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
//     // const { data, error, isLoading } = pokemonApi.endpoints.getBerryById.useQuery(number)
    
//     console.log(data)
//     const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation()
    
//     // useEffect(()=>{
//     //     // console.log(data)
//     // },[data])
//     const updateHandle = (e)=>{
//         e.preventbydefault();

//         // const results = () => {
//         //     return updatePost({id, name})
//         // }
//         // results;

//         isLoading={isUpdating}
//     }

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {isFetching ? <div>Fetching..</div> : <div></div>}
//   {updateHandle}
//   </>)
// }














// import { useState } from 'react'
// import { useGetBerryByIdQuery } from './pokemonSlice'
// // import {refetchOnMountOrArgChange } 
// export default function Pokemon() {
//     const [number,setNumber] = useState(2);
//     const { data, error, isLoading,isFetching } = useGetBerryByIdQuery(number)
//     //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
//     // const { data, error, isLoading } = pokemonApi.endpoints.getBerryById.useQuery(number)
    
//     console.log(data)
    
//     // useEffect(()=>{
//     //     // console.log(data)
//     // },[data])

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {isFetching ? <div>Fetching..</div> : <div></div>}
  
//   <button onClick={()=>{setNumber( number + 1)}}>+</button>
//   <button onClick={()=>{setNumber( number === 0 ?  number - 1 : 1)}}>-</button>
//   {data ? <div>
//     &ldquo;{data.firmness.name}&ldquo;
//     {data.firmness.url}

//     {data.flavors.map((d)=>
//         <div key={d.flavor.name}>
//             {d.flavor.name}
//         </div>
//     )}
//     </div> : <div></div>}

//   </>)
// }












// import { useState } from 'react'
// import { useGetBerryByIdQuery } from './pokemonSlice'
// // import {refetchOnMountOrArgChange } 
// export default function Pokemon() {
//     const [number,setNumber] = useState(2);
//     const { data, error, isLoading,isFetching } = useGetBerryByIdQuery(number)
//     //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
//     // const { data, error, isLoading } = pokemonApi.endpoints.getBerryById.useQuery(number)
    
//     console.log(data)
    
//     // useEffect(()=>{
//     //     // console.log(data)
//     // },[data])

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {isFetching ? <div>Fetching..</div> : <div></div>}
  
//   <button onClick={()=>{setNumber( number + 1)}}>+</button>
//   <button onClick={()=>{setNumber( number === 0 ?  number - 1 : 1)}}>-</button>
//   {data ? <div>
//     &ldquo;{data.firmness.name}&ldquo;
//     {data.firmness.url}

//     {data.flavors.map((d)=>
//         <div key={d.flavor.name}>
//             {d.flavor.name}
//         </div>
//     )}
//     </div> : <div></div>}

//   </>)
// }













// // import { useState } from 'react'
// // import { useGetPokemonByNameQuery } from './pokemonSlice'
// import { pokemonApi } from './pokemonSlice'
// export default function Pokemon() {
//     // Using a query hook automatically fetches data and returns query values
//     // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
//     // Individual hooks are also accessible under the generated endpoints:
//     // const { data, error, isLoading } = pokemonApi.endpoints.getAllPokemon.useQuery()
//     //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
//     const { data, error, isLoading } = pokemonApi.endpoints.getAllBerry.useQuery()
    
//     console.log(data.results)

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {data.results.map((m)=>(
//     <div key={m.name}>
//         {m.name}<p>{m.url}</p>
//     </div>))}

//   </>)
// }








// // import { useState } from 'react'
// // import { useGetPokemonByNameQuery } from './pokemonSlice'
// import { pokemonApi } from './pokemonSlice'
// export default function Pokemon() {
//     // Using a query hook automatically fetches data and returns query values
//     // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
//     // Individual hooks are also accessible under the generated endpoints:
//     const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
    
//     console.log(data)

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {data ? <div>{data.base_experience}</div> : <div></div>}
//   </>)
// }











// // import { useState } from 'react'
// // import { useGetPokemonByNameQuery } from './pokemonSlice'
// import { pokemonApi } from './pokemonSlice'
// export default function Pokemon() {
//     // Using a query hook automatically fetches data and returns query values
//     // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
//     // Individual hooks are also accessible under the generated endpoints:
//     const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
    
//     // console.log(data)
//     console.log(data)

//   return(<>
//   {error ? <div>Error</div> : <div></div>}
//   {isLoading ? <div>loading</div> : <div></div>}
//   {data ? <div>{data.base_experience}</div> : <div></div>}
//   {/* {data.abilities.map((m)=><div key={m.id}>{m.id}</div>)} */}
//   </>)
// }