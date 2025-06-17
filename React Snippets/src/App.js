import './App.css';
import CounterComponent from './components/CounterComponent';
import FetchUsersComponent from './components/FetchUsersComponent';
import FormComponent from './components/FormComponent';
import ShowHideText from './components/ShowHideText';
import TodoComponent from './components/TodoComponent';
import Togglebutton from './components/Togglebutton';
import ToggleComponent from './components/Togglecomponent';

function App() {
  return (
    <div>
      <TodoComponent />
      <hr />
      <FetchUsersComponent />
      <hr />
      <ToggleComponent />
      <hr />
      <CounterComponent />
      <hr />
      <Togglebutton />
      <hr />
      <ShowHideText />
      <hr />
      <FormComponent />
    </div>
  );
}

export default App;
