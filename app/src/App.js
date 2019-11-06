import React from 'react'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Main from './Componentes/Main'
import { Provider } from './contexto'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            usuarios:[],
            eliminarUsuario : this.eliminarUsuario
        }
        // bind el this de App al this de eliminar usuario o podes usar la funcion eliminarUsuarioSinBind
        //this.eliminarUsuario = this.eliminarUsuario.bind(this)
    }

    componentDidMount(){
        fetch("http://localhost:3000/usuarios")
        .then((respuesta)=> {return respuesta.json()})
        .then((respuesta)=>{
            this.setState({usuarios : respuesta})
        })
    }

    eliminarUsuarioConBind(indice){
        console.log(`Eliminando...`+  indice)
        this.setState()
    }

    eliminarUsuario = (indice) => {
        console.log(`Eliminando...`+  indice)
        
        //delete de la base
        fetch(`http://localhost:3000/usuarios/${this.state.usuarios[indice].id}`,{
            method : "DELETE"
        })
        .then((response) => {
            if (response.status === 200){
                // let nuevosUsuarios = []
                // nuevosUsuarios.push(...this.state.usuarios.slice(0,indice))
                // nuevosUsuarios.push(...this.state.usuarios.slice(indice+1))
                // // console.log(nuevosUsuarios)
                // this.setState({usuarios : nuevosUsuarios })
                // o
                this.setState({usuarios :[
                    ...this.state.usuarios.slice(0,indice),
                    ...this.state.usuarios.slice(indice+1)
                ]})
            }
        })        
    }


    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )
    }
}

//exp y tab
//export default App