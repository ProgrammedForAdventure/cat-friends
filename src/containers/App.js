import React, { Component } from 'react';
import CardList from "../components/CardList";
// import { cats } from "./cats";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { cats, searchField } = this.state;

        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (cats.length === 0) {
            return <h1>Loading...</h1>
        }

        return (
            <div className={'tc'}>
                <h1 className={'f2'}>Cat Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }))
    }
}

export default App;