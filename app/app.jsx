var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hasHistory} = require('react-router');
var Main = require('Main');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
