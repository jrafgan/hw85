import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main";
import AddArtist from "./containers/AddArtist";
import AddAlbum from "./containers/AddAlbum";


class App extends Component {
    render() {
        return (
            <Fragment>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/add_artist" exact component={AddArtist} />
                        <Route path="/add_album" exact component={AddAlbum} />
                    </Switch>
            </Fragment>
        );
    }
}

export default App;