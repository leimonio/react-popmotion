require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import PopmotionAction from '../PopmotionAction';
import PopmotionActor from '../PopmotionActor';

let yeomanImage = require('../../images/yeoman.png');

class Example2Component extends React.Component {
  render() {
    return (
      <PopmotionAction actionType="Tween" runOnMount={true} duration={600} delay={1000} values={ {y: 100} }>
        <PopmotionActor element=".actor-class">
          <div className="actor-class">Im the actor</div>
        </PopmotionActor>
      </PopmotionAction>
    );
  }
}

Example2Component.defaultProps = {
};

export default Example2Component;