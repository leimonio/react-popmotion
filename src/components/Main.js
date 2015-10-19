require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import PopmotionComponent from './PopmotionComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
        <PopmotionComponent
            actorSelector=".index"
            actionType="Tween"
            values={ {y: 100} }
            duration={600}
            delay={1000}
            runOnMount={true}>
          <div className="index">
            <img src={yeomanImage} alt="Yeoman Generator" />
            <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
          </div>
        </PopmotionComponent>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
