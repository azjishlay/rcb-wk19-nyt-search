var React = require('react');

var Results = React.createClass({
  render: function(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title"><strong>
            <i className="fa fa-list-alt"></i>  Results</strong></h1>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            
          </ul>         
        </div>
      </div>
    )
  }
});

module.exports = Results;