import React from "react"
import {Bar} from '../components/Bar';
import { ListaProductos } from "../components/ListaProductos";
import '../App.css';


export const AdminProductos = () =>{
    return (
        <>
        <Bar/>
        <ListaProductos/>
        </>
    )
}