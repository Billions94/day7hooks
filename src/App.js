import './App.css';
import MyNav from './component/MyNav'
import BookList from './component/BookList'
import MyFooter from './component/MyFooter'

function App() {
  return (
    <div className="App">
      <MyNav />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
