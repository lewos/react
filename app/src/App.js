import React from 'react'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Main from './Componentes/Main'
import { Provider } from './contexto'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            usuarios:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/usuarios")
        .then((respuesta)=> {return respuesta.json()})
        .then((respuesta)=>{
            this.setState({usuarios : respuesta})
        })
    }

    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main usuarios="Horacio"/>
                <Footer/>
            </Provider>
        )
    }
}

//exp y tab
//export default App