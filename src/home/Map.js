import './Map.css';
import {Helmet} from "react-helmet";

function Map(){
    const script="//www.myshiptracking.com/js/widgetApi.js" ;
return (
    <div className="map">
        <Helmet>
        <script id="myshiptrackingscript" src="//www.myshiptracking.com/js/widgetApi.js" async></script>
        </Helmet>
    </div>
)
}

export default Map;