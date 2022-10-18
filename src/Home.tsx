import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';

export default function Home() {


    return (
        <div>
            <Navbar />

            <Products />
        </div>
    )
}
