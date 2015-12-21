'use strict';
var Hello = React.createClass({
    getInitialState: function() {
        return {value: 'Your name here'};
    },

    handleChange: function(event){
        this.setState({value: event.target.value,
                        disabled: true});
        console.log(disabled);
    },

    render: function(){
    var value = this.state.value;
    return (
    	<p>
        Hello, <input type="text" value={value} onChange={this.handleChange} disabled={false} />!
        It is {this.props.date.toTimeString()}
      </p>
	   );
	   }
});
setInterval(function(){
    ReactDOM.render(
	<Hello date={new Date()} />,
	document.getElementById('test')
	);
}, 500);	   