import React from "react"
import {BarClient} from '../components/BarClient';
import { ListProducts } from "../components/ListProducts";
import '../App.css';

export const Client = () => {
    return (
        <>
        <BarClient/>
        <ListProducts/>
        </>
    )
}