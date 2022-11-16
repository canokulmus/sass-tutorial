import React, { useState } from 'react';
import "./style/map-get.scss";
import "./style/nesting.scss";
import "./style/mixin.scss";
import "./style/function.scss";
import "./style/extend.scss";
import "./style/if-else.scss";


const App: React.FC = () => {


  return (
    <div className="App">

      {/* for Map-get example */}
      {/* <h5 className='ex-map-get'>Map-get example</h5> */}

      {/* for nesting example */}
      {/* <div className="card">
        <h4 className="card-title">Lorem</h4>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore odit accusantium. Quis nobis ad et numquam odit vel eligendi sit, rerum nostrum ea voluptate? Consectetur dicta ipsa excepturi exercitationem!</p>
        <ul className="list">
          <li className="list-item"><a href="#">Link 1</a></li>
          <li className="list-item"><a href="#">Link 2</a></li>
          <li className="list-item"><a href="#">Link 3</a></li>
        </ul>
      </div> */}


      {/* mixin example */}
      {/* <div className="card2">
        <h4 className="card-title2">Lorem</h4>
        <p className="card-text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore odit accusantium. Quis nobis ad et numquam odit vel eligendi sit, rerum nostrum ea voluptate? Consectetur dicta ipsa excepturi exercitationem!</p>
      </div> */}

      {/* scss functions example */}
      {/* <div className="card3">
        <div className="first"><span>first</span></div>
        <div className="second"><span>second</span></div>
        <div className="third"><span>third</span></div>
        <div className="x"><span>x</span></div>
        <div className="y"><span>y</span></div>
      </div> */}

      {/* scss extend example */}
      {/* <div className="error">error message</div>
      <div className="success">success message</div>
      <div className="warning">warning message</div> */}

      {/* If-else scss example  */}
      <div className="profile">&#9728;</div>
      <div className="profile">&#9738;</div>
      <div className="profile">&#9828;</div>

    </div>
  );
}

export default App;
