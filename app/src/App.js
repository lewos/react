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