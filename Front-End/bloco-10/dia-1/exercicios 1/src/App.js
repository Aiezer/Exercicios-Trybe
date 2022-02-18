import logo from './logo.svg';
import './App.css';

// Criar uma lista de tarefas simples em React

const array = ['academia', 'tomar banho', 'estudar o conteúdo do course', 'almoçar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>{array.map((item) => Task(item))}</ol>
  );
}

export default App;
