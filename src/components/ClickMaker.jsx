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
        <button key="a" onClick={this.handleOnClick}>Click Me</button>
        <button key="b" onClick={this.handleOnPrime}>Prime</button>
      </div>
    );
  }
});

module.exports = ClickMaker;
