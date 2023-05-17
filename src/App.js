import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<h2>Главная страница</h2>} />
            <Route path="/todo" element={<TodoList />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;