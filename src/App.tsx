import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {MainPageContainer} from 'Pages/Main';
import {SecondPageComponent} from 'Pages/Second';
import {Store} from './Store';

interface IProps {

};

interface IState {

};

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <Provider store={Store}>
        <Route path='/' component={MainPageContainer} />
        <Route path='/some-route' component={SecondPageComponent} />
      </Provider>
    );
  };
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
