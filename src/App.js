import Bookform from "./components/Bookform";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./conetxts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <Bookform/>
      </BookContextProvider>
    </div>
  );
}

export default App;
