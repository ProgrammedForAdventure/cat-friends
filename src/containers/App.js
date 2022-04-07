import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
// import { cats } from "./cats";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
    const [cats, setCats] = useState([]);
    const [searchField, setSearchField] = useState("")

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setCats(users));
    }, []); // Only runs on initial render
    // }, [cats]); // Would run on infinite loop, since setCats() gets called within
    // }, [searchField]); // Runs on initial render, and then whenever search is updated.

    const onSearchChange = (event) => setSearchField(event.target.value);

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (cats.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={'tc'}>
            <h1 className={'f2'}>Cat Friends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList cats={filteredCats}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;