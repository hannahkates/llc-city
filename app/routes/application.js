import Route from '@ember/routing/route';
import fetch from 'fetch';
// const HOST = 'http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/MAPPLUTO/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson';
export default Route.extend({
  model() {
    return fetch('https://planninglabs.carto.com/api/v2/sql?q=SELECT * FROM mappluto_18v_1_1 WHERE left(address, 7) = left(ownername, 7) and length(address) > 1&format=geojson')
      .then(blob => blob.json());
  }
});