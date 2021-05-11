import { NavLink } from 'react-router-dom'
import NavBar from './component/NavBar'
// 封装好的路由
import ViewRouter from './router/index'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="nar">
        <NavLink to="/index">Index</NavLink>
        &nbsp;
        <NavLink to="/login">Login</NavLink>
        &nbsp;
        <NavLink to="/test">test</NavLink>
      </div> */}

      <ViewRouter />

      <NavBar />
    </div>
  );
}

export default App;
