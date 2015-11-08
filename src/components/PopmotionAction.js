import React from 'react/addons';
import PopmotionUI from 'popmotion';
import PopmotionActor from './PopmotionActor';

var _ = {
    keys    : require('lodash/object/keys'),
    omit    : require('lodash/object/omit')
};

class PopmotionActionComponent extends React.Component {

    render() {
        return React.cloneElement(this.props.children, { action : this.action, runOnMount: this.props.runOnMount });
    }

    componentWillMount() {
        this.action = this._initializeAction();
    }

    _initializeAction() {
        if(!this.props.actionType) {
            return;
        }

        let actionProps = _.omit(this.props, _.keys(PopmotionActionComponent.propTypes));
        return new PopmotionUI[this.props.actionType](actionProps);
    }
}

PopmotionActionComponent.displayName = 'PopmotionAction';

PopmotionActionComponent.propTypes = {
    runOnMount  : React.PropTypes.boolean,
    children    : React.PropTypes.element.isRequired,
    actionType: React.PropTypes.oneOf(['Simulate', 'Track', 'Tween'])
};

PopmotionActionComponent.defaultProps = {
    runOnMount : false,
    actionType : null
};

export default PopmotionActionComponent;