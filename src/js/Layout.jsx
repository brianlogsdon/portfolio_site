import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import Resume from "./views/resume.jsx";
import Navbar from "./components/navbar.jsx";


import Store from "./store/appContext.jsx";
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
                            <Route exact path="/resume" component={Resume} />
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
}

export default Store(Layout);
