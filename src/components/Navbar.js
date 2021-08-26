import React, {useContext} from 'react'
import { BookContext } from '../conetxts/BookContext'

export default function Navbar() {
    const {books} = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Ajil's Reading List</h1>
            <p>Currently you have { books.length } books to get through...</p>
        </div>
    )
}
