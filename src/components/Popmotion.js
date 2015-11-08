import React from 'react/addons';
import PopmotionUI from 'popmotion';
import PopmotionAction from './PopmotionAction';
import PopmotionActor from './PopmotionActor';

var _ = {
    keys    : require('lodash/object/keys'),
    omit    : require('lodash/object/omit')
};

class PopmotionComponent extends React.Component {

    render() {
        let actionProps = _.omit(this.props, ['actorSelector']);
        return (
            <PopmotionAction {...actionProps}>
                <PopmotionActor element={this.props.actorSelector}>
                    {actionProps.children}
                </PopmotionActor>
            </PopmotionAction>
        );
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