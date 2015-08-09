console.log('app');

/**
 * APP handles the rendering side of things.
 */
const React = require('react/addons');
const Router = require('react-router');
const Applicate = require('./components/Applicate');
const { Route } = Router;
const alt = require('./flux/alt');
require('./fluxxer');
window.alt = alt;

const routes = (
  <Route name="app" path="/" handler={Applicate} />
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
