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
            usuarios_pidiendo:false,
            usuarios_pedido:false,
            usuarios_error:false,
            eliminarUsuario : this.eliminarUsuario,
            pedirUsuarios: this.pedirUsuarios,
            tickets:[],
            pedirTickets: this.pedirTickets,
            eliminarTicket: this.eliminarTicket
        }
        // bind el this de App al this de eliminar usuario o podes usar la funcion eliminarUsuarioSinBind
        //this.eliminarUsuario = this.eliminarUsuario.bind(this)
    }

    componentDidMount(){
        // fetch("http://localhost:3000/usuarios")
        // .then((respuesta)=> {return respuesta.json()})
        // .then((respuesta)=>{
        //     this.setState({usuarios : respuesta})
        // })
    }

    pedirUsuarios = () => {

        this.setState({usuarios_pidiendo:true})


         fetch("http://localhost:3000/usuarios")
        .then((respuesta)=> {return respuesta.json()})
        .then((respuesta)=>{
            this.setState({usuarios : respuesta, usuarios_pidiendo : false})
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

    pedirTickets = () => {


        this.setState({})

        fetch("http://localhost:3000/tickets")
        .then((respuesta)=> {return respuesta.json()})
        .then((respuesta)=>{
            this.setState({tickets : respuesta})
        })
    }

    eliminarTicket = (indice) => {
        console.log(`Eliminando...`+  indice)
        
        //delete de la base
        fetch(`http://localhost:3000/tickets/${this.state.tickets[indice].id}`,{
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
                this.setState({tickets :[
                    ...this.state.tickets.slice(0,indice),
                    ...this.state.tickets.slice(indice+1)
                ]})
            }
        })        
    }





    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main pedirUsuarios = {this.pedirUsuarios}/>
                <Footer/>
            </Provider>
        )
    }
}

//exp y tab
//export default App