import React,{useEffect,useContext} from 'react'
import contexto from '../contexto'

const Usuarios = () => {

    let {pedirUsuarios,eliminarUsuario,usuarios} = useContext(contexto)

    // este hook esta simulando el componentDidMount
    useEffect(()=>{
        console.log("Hizo Render")
        if(!usuarios.length){
            pedirUsuarios()
        }
        /*Este array de dependencias sirve para decirle al hook*/
    },[])

    return (
        <div>
            {usuarios.map( (usuarios,i) => 
                    <p key={i}>{usuarios.name}
                        {/* <button className="material-icons" onClick={()=> { props.eliminarUsuario(i) }}>clear</button> */}
                        <button className="material-icons" onClick={ eliminarUsuario.bind(null,i)}>clear</button>
                        <button className="material-icons">create</button>
                    </p>
                    )
            } 
        </div>
    )
}

export default Usuarios
