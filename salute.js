'use strict';
var Hello = React.createClass({
    getInitialState: function() {
        return {value: 'Your name here',
                active: false};
    },

    handleChange: function(event){
        console.log("character:" + event.target.value);
        var temp = event.target.value.split("");
        var charact = temp.substring(temp.length-1,temp.length);
        console.log(charact);
        if(charact === '\n'){
            console.log("yes!");
            this.setState({active: true});
        }
        else
            this.setState({value: event.target.value});
    },

    render: function(){
    var value = this.state.value;
    var active = this.state.active;
    return (
    	<p>
        Hello, <input type="text" value={value} onChange={this.handleChange} disabled={active} />!
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