import React,{useEffect,useContext} from 'react'
import contexto from '../contexto'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Tickets = () => {
    
    let {pedirTickets,tickets,eliminarTicket,usuarios,pedirUsuarios} = useContext(contexto)

    useEffect(()=>{
        console.log("Hizo Render de Tickets")
        if(!tickets.length){
            pedirTickets()
        }if(!usuarios.length){
            pedirUsuarios()
        }
        /*Este array de dependencias sirve para decirle al hook*/
    },[])


    return (

        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID Ticket</TableCell>
            <TableCell align="right">Asuntirijillo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map( (ticket,i) => (
            <TableRow key={ticket.id}>
              <TableCell component="th" scope="row">{ticket.id}</TableCell>
              <TableCell align="right">{ticket.asunto}</TableCell>
              <TableCell align="right"><button className="material-icons" onClick={ eliminarTicket.bind(null,i)}>clear</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        // <div>
        // {




        //     tickets.map( (ticket,i) => 
        //     <p key={i}>{ticket.asunto}
        //         <button className="material-icons">create</button>
        //     </p>
            
        //     )
        // } 
        // </div>
    )    
}

export default Tickets