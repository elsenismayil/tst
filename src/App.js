import "./App.css";
import React, { createContext, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Companents/Home"
import Navbar from "./Companents/Navbar";
import CreateList from './Companents/CreateList'
import Footer from "./Companents/Footer";
import CategoryEdit from './Companents/CategoryEdit'
import { DarkModeProvider } from "./Companents/Context";
import Detail from "./Companents/Detail";
import Register from "./Companents/Registration/Register";
import SDK from './Companents/Sdk'
export const SearchItem = createContext({})


function App() {
  const [dark, setDark] = useState(true);
  const [inputValue, setInputValue] = useState('')

  const [loading, setLoading] = useState(false)

  const [searchResults, setSearchResults] = useState([])
  const sdk = new SDK();
  console.log();
  const prevController = useRef()


  const [currentIndex, setCurrentIndex] = useState(1)

  const handleChange = async (isInfinity = false) => {
    if (inputValue) {
      try {
        const controller = new AbortController();

        if (prevController.current) {
          prevController.current.abort()
        }

        prevController.current = controller;
        setLoading(true)
        const data = await sdk.getSearch(inputValue, { abortSignal: controller.signal, page: currentIndex })
        if (isInfinity) {
          setSearchResults([...searchResults, ...data.results.filter(w => w.media_type !== "person" && w.backdrop_path)])
        }
        else {
          setSearchResults(data.results.filter(w => w.media_type !== "person" && w.backdrop_path))
        }
        setLoading(false)
       
      } catch (error) {
        console.log(error)
      }
    }
    else {
      setLoading(false)
      setSearchResults([])
    }

  }


  return (
    <Router>
      <DarkModeProvider
        value={{
          dark,
          setDark,
        }}
      >
          <SearchItem.Provider value={{
            handleChange,
            inputValue,
            setInputValue,
            loading,
            searchResults,
            currentIndex,
            setCurrentIndex

          }}>
        <div
          style={
            dark
              ? { backgroundColor: "#222831", color: "#fff" }
              : { backgroundColor: "#fff", color: "#222831" }
          }
         
        >
          <Navbar />

          <Switch>
            <Route path="/" exact>
            <Home/>
            </Route>
            <Route path="/registeration" exact>
              <Register />
            </Route>
            <Route path="/film-detail/:type/:id">
              <Detail />
            </Route>
            <Route path="/CreateList" exact>
              <CreateList/>
            </Route>
            <Route path="/CategoryEdit">
              <CategoryEdit/>
            </Route>
          </Switch>
          <Footer />
        </div>
        </SearchItem.Provider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
