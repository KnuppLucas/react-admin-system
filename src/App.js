import SidebarComp from "./components/sidebar/SidebarComp";
import TopbarComp from "./components/topbar/TopbarComp";
import './app.css';

function App() {
  return (
    <div>
      <TopbarComp />
      <div className="container">
          <SidebarComp />
          <div className="others">other pages</div>
      </div>
    </div>
  ) 
}

export default App;
