'use strict';
var Hello = React.createClass({
    getInitialState: function() {
        return {value: '',
                active: false};
    },

    handleChange: function(event){
        var temp = event.target.value;
        console.log("character:" + temp);
        this.setState({value: event.target.value});

    },

    handleSubmit: function(event){
        this.setState({active: true});
    },

    render: function(){
    var value = this.state.value;
    var active = this.state.active;
    return (
        <form  onSubmit={this.handleSubmit}>
           Hello, <input type="text" value={value} placeholder="Add your name here" className="inputBox" onChange={this.handleChange} disabled={active}/>!  It is {this.props.date.toTimeString()}
        </form>
	   );
	   }
});
setInterval(function(){
    ReactDOM.render(
	<Hello date={new Date()} />,
	document.getElementById('test')
	);
}, 500);	   