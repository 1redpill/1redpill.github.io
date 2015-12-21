'use strict';
var Hello = React.createClass({
    getInitialState: function() {
        return {value: '',
                active: false};
    },

    handleChange: function(event){
        var temp = event.target.value;
        console.log("character:" + temp);
 //       var charact = temp.substring(temp.length-1,temp.length);
 //       console.log(charact);
 /*       if(charact === '\n'){
            console.log("yes!");
            this.setState({active: true});
        }
        else
            */
            this.setState({value: event.target.value});

    },

    handleSubmit: function(event){
        this.setState({active: true});
        document.getElementById(input).innerHTML = event.target.value;
    },

    render: function(){
    var value = this.state.value;
    var active = this.state.active;
    return (
        <form  onSubmit={this.handleSubmit}>
        Hello, <div id="input">
                    <input type="text" value={value} placeholder="your name here" onChange={this.handleChange} disabled={active}/>                    
               </div>!It is {this.props.date.toTimeString()}
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