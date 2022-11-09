import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/rickmortywiki' element={<Home />} />
          <Route path='/:id' element={<CardDetails />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/episodes/:id' element={<CardDetails />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:id' element={<CardDetails />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  let API_ENDPOINT = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {

    (async function(){
      let data = await fetch(API_ENDPOINT).then(res => res.json());
      updateFetchedData(data);
    })()

  }, [API_ENDPOINT])

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber = {setPageNumber} setSearch = {setSearch} />

      <div className="container">
        <div className="row">
          <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page='/' results = {results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info = {info} pageNumber= {pageNumber} setPageNumber = {setPageNumber} />
    </div>
  );
}

export default App;
