import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
// 引入ui库
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { lightBlue, pink } from 'material-ui/colors';
import Main from './views/Main';
import registerServiceWorker from './registerServiceWorker';
import { AppState, TopicState, TestState } from './store/store';

const appState = new AppState();
const topicState = new TopicState();
const testState = new TestState();

const root = document.getElementById('root');
const theme = createMuiTheme({
  palette: {
    primary: pink,
    accent: lightBlue,
    type: 'light'
  }
})

ReactDOM.render(
  <Provider
    appState={appState}
    topicState={topicState}
    testState={testState}
    >
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , root
);
registerServiceWorker();
