//rfa
import React from 'react'
import Usuarios from '../Paginas/Usuarios'
import {Route,Switch} from "react-router-dom"
import Tickets from '../Paginas/Tickets'
import Home from '../Paginas/Home'

const Main = ({pedirUsuarios,pedirTickets}) => {
    return (
        <main>
            <h2>Main</h2>
            {/* <Usuarios/> */}
            <Switch>
                <Route path="/" exact   component={Home}/>
                {/* <Route path="/usuarios"  render={
                    (props) => <Usuarios  {...props} pedirUsuarios={pedirUsuarios} />
                }/> */}
                <Route path="/usuarios"  component={Usuarios} />
                <Route path="/tickets"   component={Tickets}/>
            </Switch>
        </main>
    )
}

export default Main
