var React = require('react');

var Query = React.createClass({
  render: function(){
    return(
      <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
          </div>
          <div className="panel-body">


            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <h4 className=""><strong>Topic</strong></h4>
                <input type="text" className="form-control" id="keyword" />

                <h4 className=""><strong>Start Year</strong></h4>
                <input type="text" className="form-control" id="search_start" />

                <h4 className=""><strong>End Year</strong></h4>
                <input type="text" className="form-control" id="search_end" />
              </div>

              <div className="pull-right">
                <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
              </div>
            </form>

          </div>
        </div>
    )
  }
});

module.exports = Query;