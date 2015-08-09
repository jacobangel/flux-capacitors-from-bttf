const React = require('react/addons');
const connectToStores = require('alt/utils/connectToStores');
const UIStore = require('../flux/UIStore');
const ClickMaker = require('./ClickMaker');

const Connected = React.createClass({
  propTypes: {
    clicks: React.PropTypes.number,
  },

  render() {
    const { clicks } = this.props;
    return (
      <div className="cewl">
        <p>Clicked: {clicks}</p>
        <ClickMaker />
      </div>
    );
  },
});

Connected.getPropsFromStores = () => { return UIStore.getState(); };
Connected.getStores = () => [UIStore];
module.exports = connectToStores(Connected);
