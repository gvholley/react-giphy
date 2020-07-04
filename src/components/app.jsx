import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {
    const gifs = [
      { id: "UmGYBusanpEwU" },
      { id: "12FLhMHdanoLJK" },
      { id: "8EmeieJAGjvUI" },
      { id: "DK3nPt4gDanRK" },
      { id: "h7XVO9OyujKtW" },
      { id: "DtXfTSHi6mHFS" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
          <Gif id="BBkKEBJkmFbTG" />
          </div>
        </div>

        <div className="right-scene">
        <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
