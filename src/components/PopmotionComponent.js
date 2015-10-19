import React from 'react/addons';
import PopmotionUI from 'popmotion';

var _ = {
    keys    : require('lodash/object/keys'),
    omit    : require('lodash/object/omit')
};

class PopmotionComponent extends React.Component {

    componentDidMount() {
        this.actor = this._initializeActor();
        this.action = this._initializeAction();

        if(this.props.runOnMount) {
            this.runAnimation();
        }
    }

    runAnimation() {
        this.actor.start(this.action);
    }

    _initializeActor() {
        if (this.props.actorSelector != null) {
            return new PopmotionUI.Actor(this.props.actorSelector);
        } else {
            return new PopmotionUI.Actor(React.findDOMNode(this));
        }
    }

    _initializeAction() {
        if(!this.props.actionType) {
            return;
        }

        let actionProps = _.omit(this.props, _.keys(PopmotionComponent.propTypes));
        return new PopmotionUI[this.props.actionType](actionProps);
    }

    render() {
        return this.props.children;
    }
}

PopmotionComponent.displayName = 'PopmotionComponent';

PopmotionComponent.propTypes = {
    runOnMount      : React.PropTypes.boolean,
    children        : React.PropTypes.element.isRequired,
    actorSelector   : React.PropTypes.string,
    actionType      : React.PropTypes.oneOf(['Simulate', 'Track', 'Tween'])
};

PopmotionComponent.defaultProps = {
    runOnMount      : false,
    actorSelector   : null,
    actionType      : null
};

export default PopmotionComponent;