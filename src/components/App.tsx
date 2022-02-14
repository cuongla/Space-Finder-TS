import React from 'react';
import { User } from '../model/Model'
import { AuthService } from 'services/AuthService'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';

interface AppState {
    user: User | undefined
}

export default class App extends React.Component<{}, AppState>{
    constructor(props: any) {
        super(props);

        this.setUser = this.setUser.bind(this);
    }
    private authService: AuthService = new AuthService();

    private setUser(user: User) {
        this.setState({ user });
        console.log('Setting the user! ' + user);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar user={this.state.user} />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path='/login'>
                                <Login authService={this.authService} setUser={this.setUser} />
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
