/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const ReduxProvider = () => {
    return(
        <Provider store={Store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
