import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from './Components/Form';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="app-children">
                <Switch>
                    <Route path="/details" component={Details} />
                    <Route path="/" component={RegistrationForm} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
