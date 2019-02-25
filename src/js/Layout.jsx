import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import AddContact from "./views/AddContact.jsx";
import Store from "./store/appContext.jsx";
import EditContact from "./views/editContact.jsx";
export class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/contacts" component={Home} />
                            <Route exact path="/add" component={AddContact} />
                            <Route exact path="/edit/:id" component={EditContact} />
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Store(Layout);
