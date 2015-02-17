var React = require("react");


require("./targets.scss");


module.exports = React.createClass({
  render: function() {
    return <section id="targets">
      <div>
        <div>
          <h5><a href="#">google.com</a></h5>
          <span className="up">up</span>
        </div>
      </div>
      <div>
        <div>
          <h5><a href="#">facebook.com</a></h5>
          <span className="down">down</span>
        </div>
      </div>
      <div>
        <div>
          <h5><a href="#">twitter.com</a></h5>
          <span className="none">not checked yet</span>
        </div>
      </div>
    </section>;
  }
});
