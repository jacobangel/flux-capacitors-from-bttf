const React = require('react/addons');
const UIActions = require('../flux/UIActions');

const ClickMaker = React.createClass({

  handleOnClick() {
    UIActions.click();
  },

  handleOnPrime() {
    UIActions.getPrime(this.props.clicks);
  },

  render() {
    return (
      <div className="cewl">
        <button onClick={this.handleOnClick}>Click Me</button>
        <button onClick={this.handleOnPrime}>Prime</button>
      </div>
    );
  }
});

module.exports = ClickMaker;
