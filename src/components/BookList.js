import React,{ useContext } from 'react'
import { BookContext } from '../conetxts/BookContext';
import BookDetail from './BookDetail';

export default function BookList() {
    const { books } = useContext(BookContext);
    
    return books.length ? (
        <div className='Book-List'>
            <ul>
                { books.map(book => {
                    return(<BookDetail book={book} key={book.id}/>)
                })}
            </ul>
        </div>
    ): (
        <div className="empty">
            No Books to read. Hello Free Time !!!
        </div>

    )
}
