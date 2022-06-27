import { useState } from "react";
import { postar } from "./api";


export function post() {
    const [Nome,setNome]=useState('');
    
function salvar(n){
const resp =postar(n);
return resp
}

    return(
        <main>
            <h1>Adicionar Anime</h1>

            <div>
                nome do anime:
                <input type="text" value={Nome} onChange={setNome(e=>(e.target.value))}/>
            </div>
            <button onClick={salvar}>Salvar</button>
        </main>
    );
       
   } 