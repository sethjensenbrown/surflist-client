import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landing-page';
import BoardSearch from './board-search';
import Results from './results';
import Board from './board';
import NewBoard from './new-board';
import EditBoard from './edit-board';
import Header from './header';
import Footer from './footer';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <main>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/board-search" component={BoardSearch}/>
                        <Route exact path="/results" component={Results}/>
                        <Route exact path="/board" component={Board}/>
                        <Route exact path="/new-board" component={NewBoard}/>
                        <Route exact path="/edit-board" component={EditBoard}/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
