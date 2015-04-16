var React = require('react');
var TestUtils = React.addons.TestUtils;
var GoUptimeApp = require('../lib/go-uptime-app.jsx');


describe("GoUptimeApp", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <GoUptimeApp name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('go-uptime-app');
  });
});
