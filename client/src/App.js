import AddBook from "./component/AddBook";
import BookList from "./component/BookList";
import './index.css';

function App() {
  return (
    <div id="main">
      <h1>Sam's Reading List</h1> 
      <BookList />     
      <AddBook />
    </div>
  );
}

export default App;
