import {Component} from 'react'
import '../Styles.css'

class BookList extends Component{

    render(){
        const books = this.props.books
        const bookItems = books.map((book, index)=>{
            return  <div key={index}>
                    <img className='pic-size' src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}/>
                    <li>{book.title}</li>
                    <li>{book.author}</li> 
                    <li>{book.year}</li>
                    </div>
        })
        return <ul>{bookItems}</ul>
    }
}

export default BookList