'use strict';
var Hello = React.createClass({
    getInitialState: function() {
        return {value: '',
                active: false};
    },

    handleChange: function(event){
 /*       var temp = event.target.value;
        console.log("character:" + temp);
        var charact = temp.substring(temp.length-1,temp.length);
        console.log(charact);
        if(charact === '\n'){
            console.log("yes!");
            this.setState({active: true});
        }
        else
            this.setState({value: event.target.value});
*/
        this.setState({value: event.target.value, active: true});
    },

    render: function(){
    var value = this.state.value;
    var active = this.state.active;
    return (
    	<p>
        Hello, <input type="text" value={value} placeholder="your name here" onSubmit={this.handleChange} disabled={active}>!
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