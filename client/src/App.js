import './App.css';
import Metadata from "./components/Prjt_Metadata/Prjt_Metadata_Form"
function App() {
  return (
    <div style={{ minHeight: '45vh' }} className="container d-flex mt-5">
      <div className="card border-secondary bg-secondary text-end mb-3" >
        <div className="card-body text-black">
          <Metadata />
        </div>
      </div>
    </div>
  );
}

export default App;
