import React from "react"
import {BarClient} from '../components/BarClient';
import { Products } from "../components/Products";
import '../App.css';

export const Home = () => {
    return (
        <>
        <BarClient/>
        <Products/>
        </>
    )
}