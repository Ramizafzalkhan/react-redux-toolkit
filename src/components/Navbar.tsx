import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const item = useSelector((state: any) => state.counter)
    console.log(item)

    return (
        <div>
            cart {item}
        </div>
    )
}
