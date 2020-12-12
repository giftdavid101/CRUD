import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
// import { Input, DatePicker } from 'antd';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from './Components/Form';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={RegistrationForm} />
                <Route path="/details" component={Details} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
