import React, { Component } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';


class App extends Component {

  state = {
    images: []
  }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=22312591-3de65f7bc02298108cbd8238f&q=${entry}&image_type=photo&pretty=true`)
    this.setState({ images: response.data.hits })
    // console.log(this.state.images)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '30px' } } >
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={ this.state.images } />
    </div>
    )
  }
}


export default App
