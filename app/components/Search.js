var React = require('react');

var Query = require('./Search/Query');
var Results = require('./Search/Results');

// var helpers = require('../utils/helpers');

var Search = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-lg-12">

          <Query />
          <Results />
          
        </div>
      </div>
    )
  }

});

module.exports = Search;