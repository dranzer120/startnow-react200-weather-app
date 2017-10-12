import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };
}


export default connect(mapStoreToProps)(Search);;