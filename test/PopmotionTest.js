
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react/addons';
import Popmotion from 'components/Popmotion';

const ReactTestUtils = React.addons.TestUtils;

describe('PopmotionComponent', () => {

    describe('default value', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Popmotion>
                <div id="actor"></div>
            </Popmotion>
        );

        it('of actorSelector should be null', () => {
            expect(instance.props.actorSelector).to.be.null;
        });

        it('of actionType should be null', () => {
            expect(instance.props.actionType).to.be.null;
        });

        it('of onLoad should be false', () => {
            expect(instance.props.onLoad).to.be.false;
        });
    });

    describe('passed value', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Popmotion actorSelector="#actor" actionType="Tween" onLoad={true} values={{y: 100}} duration={600} delay={1000}
            >
                <div id="actor"></div>
            </Popmotion>
        );

        it('of actorSelector to be #actor', () => {
            expect(instance.props.actorSelector).to.equal('#actor');
        });

        it('of actionType to be Tween', () => {
            expect(instance.props.actionType).to.equal('Tween');
        });

        it('of onLoad to be True', () => {
            expect(instance.props.onLoad).to.be.true;
        });

        it('of duration to be 600', () => {
            expect(instance.props.duration).to.equal(600);
        });

        it('of delay to be 1000', () => {
            expect(instance.props.delay).to.equal(1000);
        });
    });
});
