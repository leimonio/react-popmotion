import React from 'react/addons';
import PopmotionUI from 'popmotion';

var _ = {
    keys    : require('lodash/object/keys'),
    omit    : require('lodash/object/omit')
};

class PopmotionActionComponent extends React.Component {

    render() {
        return React.cloneElement(this.props.children, { action : this.action, onLoad: this.props.onLoad });
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
    onLoad      : React.PropTypes.bool,
    children    : React.PropTypes.element.isRequired,
    actionType  : React.PropTypes.oneOf(['Simulate', 'Track', 'Tween'])
};

PopmotionActionComponent.defaultProps = {
    onLoad     : false,
    actionType : null
};

export default PopmotionActionComponent;