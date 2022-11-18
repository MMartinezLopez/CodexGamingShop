import React from "react"
import {Bar} from '../components/Bar';
import '../App.css';
import { ListaClientes } from "../components/ListaClientes";


export const AdminClientes = () =>{
    return (
        <>
        <Bar/>
        <ListaClientes/>
        </>
    )
}
