import React, { SyntheticEvent } from 'react';
import { User } from 'model/Model';
import { AuthService } from 'services/AuthService';
import history from 'utils/history';
interface LoginProps {
    authService: AuthService
    setUser: (user: User) => void
}

interface LoginState {
    username: string
    password: string
    loginAttempted: boolean
    loginSuccessful: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export default class Login extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        username: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    private setUserName(event: CustomEvent) {
        this.setState({ username: event.target.value })
    }

    private setPassword(event: CustomEvent) {
        this.setState({ password: event.target.value })
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const { username, password } = this.state;
        this.setState({ loginAttempted: true });
        const result = await this.props.authService.login(username, password);

        // check result
        if (result) {
            this.setState({ loginSuccessful: true });
            this.props.setUser(result);
            history.push('/profile');
        } else {
            this.setState({ loginSuccessful: false });
        }
    }

    render() {
        return (
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        )
    }
}