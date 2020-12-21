import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
// import { Input, DatePicker } from 'antd';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from './Components/Form';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details';

function App() {
    const [details, setDetails] = useState([]);
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
