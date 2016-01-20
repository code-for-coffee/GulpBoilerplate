var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var Dispensary = React.createClass({
  render: function() {
    return (
      <article className="item">
        <h2>
          {this.props.name} in {this.props.city}
        </h2>
        <em>Phone:</em> {this.props.phone}
      </article>
    );
  }
});

var DispensaryList = React.createClass({
  getInitialState: function() {
    console.log('set initial state');
    return { data: [] };
  },
  componentDidMount: function() {
    console.log('component mounted');
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    console.log(this.props);
    console.log(this.state.data);
    var dispensaryNodes = this.state.data.map(function(dispensary) {
      return (
        <Dispensary key={dispensary.id} name={dispensary.name} city={dispensary.city} phone={dispensary.phone} />
      );
    });
    console.log(dispensaryNodes);
    return (
      <div>{dispensaryNodes}</div>
    )
  }
});

ReactDOM.render(
  <DispensaryList url="http://illinoisdispensaries.space/api-v1" />,
  document.getElementById('chirps')
);
