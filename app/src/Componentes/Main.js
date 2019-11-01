//rfa
import React from 'react'
import {Consumer} from '../contexto'

const Main = () => {
    return (
        <main>
            <h2>Main</h2>
            <Consumer>
            {(contexto)=>{
                let{usuarios}=contexto
                console.log(usuarios) 
            }}
            </Consumer>
        </main>
    )
}

export default Main
