import React,{useEffect} from 'react'
import {Consumer} from '../contexto'

const Usuarios = () => {
    

    // este hook esta simulando el componentDidMount
    useEffect(()=>{
        console.log("Hizo Render")
        /*Este array de dependencias sirve para deciele al hook*/
    },[])




    return (
        <div>
            <Consumer>
            {
                ({usuarios,eliminarUsuario})=>
                //console.log(usuarios) // e, i => elemento e indice
                // usuarios.map((e,i)=>{})
                 usuarios.map( (usuarios,i) => 
                    <p key={i}>{usuarios.name}
                        {/* <button className="material-icons" onClick={()=> { props.eliminarUsuario(i) }}>clear</button> */}
                        <button className="material-icons" onClick={ eliminarUsuario.bind(null,i)}>clear</button>
                        <button className="material-icons">create</button>
                    </p>) 
            }
            </Consumer>
        </div>
    )
}

export default Usuarios
