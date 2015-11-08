require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import Popmotion from '../Popmotion';

let yeomanImage = require('../../images/yeoman.png');

class Example1Component extends React.Component {
  render() {
    return (
        <Popmotion
            actorSelector=".index"
            actionType="Tween"
            values={ {y: 100} }
            duration={600}
            delay={1000}
            onLoad={true}>
          <div className="index">
            <img src={yeomanImage} alt="Yeoman Generator" />
            <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
          </div>
        </Popmotion>
    );
  }
}

Example1Component.defaultProps = {
};

export default Example1Component;
