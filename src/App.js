
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2 className='title'>Задание 1: Температурный конвертер с Material UI</h2>
      <TemperatureConverter />
      <h2 className='title'>Задание 2: Список дел с Material UI</h2>
      <TodoList />
    </div>
  );
}

export default App;
