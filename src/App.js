import React from "react";
import "./App.css";
import GreetShare from './greet_share';
import SearchBar from './search_bar';
import PostCard from './insta_post';

function App() {
  return (
      <div className="App">
        <GreetShare />
          <SearchBar />
          <PostCard />
      </div>
  );
}

export default App;

