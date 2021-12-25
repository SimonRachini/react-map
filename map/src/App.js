import logo from './logo.svg';
import './App.css';
import { Map } from '@esri/react-arcgis';
import { loadModules } from "esri-loader";

function App() {

  const handleMapLoad = function (map, view) {
    loadModules(["esri/widgets/Search"]).then(([Search]) => {
      const searchWidget = new Search({
        view: view,
        container: "searchWidget"
      });
   //   view.ui.add(searchWidget, {
   //     position: "top-left"
   //   });
    });
  };
  return (


    <div className="App">
       <div className="sidebar">
        <div className="search-container">
          
            <div id="searchWidget"></div>
        </div>
        <div className="search-results">
            <div className="result result-1"> Result 1</div>
            <div className="result result-2"> Result 2</div>
        </div>
      </div> 
      <div className="map" id = "viewDiv">
      <Map
      mapProperties={{ basemap: "streets-vector" }}
      viewProperties={{ center: [33, 35] }}
      loaderOptions={{ version: "4.17", css: true }}
      onLoad={handleMapLoad}
    />
    </div>
    </div>


  );
}

export default App;
