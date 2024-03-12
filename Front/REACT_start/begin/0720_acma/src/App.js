import DayList from "./conponent/DayList";
import Header from "./conponent/Header";
import Day from './conponent/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = '/'>
          <DayList />
        </Route>

        <Route path = '/day:day'>
          <Day />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
