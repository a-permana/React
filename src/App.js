import React from 'react';
import './App.css';
import './index';
import Get from './hook/get';

// import PostBook from './hook/PostBook';

const App = props => {
  return (
    <div>
        <Get/>
        {/* <FetchHook/> */}
        {/* <PostBook/> */}
        {/* <FetchUsingHook/> */}
    </div>
  );
};
export default App;