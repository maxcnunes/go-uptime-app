# monitor-app

Get the AMD module located at `monitor-app.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'MonitorApp': 'monitor-app'
  }
});

require(['react', 'MonitorApp'], function(React, MonitorApp) {

  React.render(React.createElement(MonitorApp), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
