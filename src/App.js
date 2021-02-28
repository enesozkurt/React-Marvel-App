import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Details from "./containers/Details/Details";
import Layout from "./Components/Layout/Layout";
import configureStore from "./configStore"
import "semantic-ui-css/semantic.min.css";

const store = configureStore();
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:id" component={Details} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
     </Provider>
);

export default App;
