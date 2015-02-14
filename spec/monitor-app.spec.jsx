var React = require('react');
var TestUtils = React.addons.TestUtils;
var MonitorApp = require('../lib/monitor-app.jsx');


describe("MonitorApp", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <MonitorApp name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('monitor-app');
  });
});
