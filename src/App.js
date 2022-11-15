import {Component} from 'react'
import BookList from './components/BookList'

class App extends Component{
  constructor (){
    super()
    this.state = {
      books:[]
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response=>response.json())
    .then(books=>{
      this.setState({
        books: books
      })
    })
  }

  render(){
    return(
      <>
        <BookList books = {this.state.books}/>
      </>
    )
  }

}

export default App;
