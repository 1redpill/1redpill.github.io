'use strict';
var Hello = React.createClass({
    render: function(){
    return (
    	<p>
        Hello, <input type="text" placeholder="Your name here" />!
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