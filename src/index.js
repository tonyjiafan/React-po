import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'
// 引入ui库
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { lightBlue, pink } from 'material-ui/colors'
import './index.css';
import Main from './views/Main';
import registerServiceWorker from './registerServiceWorker';
import AppState from './store/app-state';

const appState = new AppState();
const root = document.getElementById('root');
const theme = createMuiTheme({
  palette: {
    primary: pink,
    accent: lightBlue,
    type: 'light'
  }
})

ReactDOM.render(
  <Provider appState={appState}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , root
);
registerServiceWorker();
