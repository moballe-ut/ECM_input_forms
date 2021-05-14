import './App.css';
import Metadata from "./components/Prjt_Metadata/Prjt_Metadata_Form"
import ListMetadata from "./components/Prjt_Metadata/List_Metadata"
function App() {
  return (
    <>
    <div style={{ minHeight: '45vh' }} className="container d-flex mt-5">
      <div className="card border-secondary bg-secondary text-end mb-3" >
        <div className="card-body text-black">
          <ListMetadata/>
          <Metadata />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
