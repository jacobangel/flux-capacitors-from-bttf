const React = require('react/addons');
const ConnectedComp = require('./Connected');

const Applicate = React.createClass({

  render() {
    return (
      <div className="cewl">
        <ConnectedComp />
      </div>
    );
  }
});

module.exports = Applicate;
