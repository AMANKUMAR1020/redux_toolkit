
import { useState } from "react";
import { useGetPokemonQuery } from "./pokemonApiSlice";

export default function Pokemon(){
    const [Data, setData] = useState([]);
    
    const { data, isError, isLoading, isSuccess } = useGetPokemonQuery(10)

    setData(data);

    if(isError){
        return (<div>
            {isError}
        </div>)
    }
    if(isLoading){
        return (<div>
            {isLoading} <span> loading...</span>
        </div>)
    }
    if(isSuccess){
        return (<div>
            {isSuccess}<span> success</span>
        </div>)
    }
    if(data){
        return (<div>
            {Data.map((d:any)=>
                <div key={d}> {d} </div>)}
 
            {isSuccess}<span> success</span>
        </div>)
    }

    return null;
}