const React = require('react/addons');
const UIActions = require('../flux/UIActions');

const ClickMaker = React.createClass({

  handleOnClick() {
    UIActions.click()
  },

  render() {
    return (
      <div className="cewl">
        <button onClick={this.handleOnClick}>Click Me</button>
      </div>
    );
  }
});

module.exports = ClickMaker;
