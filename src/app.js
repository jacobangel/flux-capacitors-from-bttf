console.log('app');

/**
 * APP handles the rendering side of things.
 */
const React = require('react/addons');
const Router = require('react-router');

const dapperWorker = require('worker!./dapper');
const d = new dapperWorker();
window.transport = d;
const alt = require('./flux/alt');
const Applicate = require('./components/Applicate');
const { Route } = Router;
window.alt = alt;

const routes = (
  <Route name="app" path="/" handler={Applicate} />
);

window.transport.postMessage({ data: 2, action: "UIActions.getPrime" });

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});
