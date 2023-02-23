import './App.css';
import LocalPagination from './components/LocalPagination';
import LocalSearch from './components/LocalSearch';
import LocalSearchWithFilter from './components/LocalSearchWithFilter'
import LocalSearchWithFilterAndPagination from './components/LocalSearchWithFilterAndPagination';
import Practice from './components/Practice';


function App() {
  return (
    <div className="App">
      <LocalPagination />
      <LocalSearch />
      <LocalSearchWithFilter />
      <LocalSearchWithFilterAndPagination />
      {/* <Practice /> */}
    </div>
  );
}

export default App;
