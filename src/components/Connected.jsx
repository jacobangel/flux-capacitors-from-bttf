const React = require('react/addons');
const connectToStores = require('alt/utils/connectToStores');
const UIStore = require('../flux/UIStore');
const ClickMaker = require('./ClickMaker');

const Connected = React.createClass({
  propTypes: {
    clicks: React.PropTypes.number,
    prime: React.PropTypes.number,
  },

  render() {
    const { clicks, prime } = this.props;
    return (
      <div className="cewl">
        <p>Clicked: {clicks}</p>
        <p>Prime: {prime}</p>
        <ClickMaker clicks={clicks} />
      </div>
    );
  },
});

Connected.getPropsFromStores = () => { return UIStore.getState(); };
Connected.getStores = () => [UIStore];
module.exports = connectToStores(Connected);
