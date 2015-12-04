var Hello = React.createClass({
    render: function(){
    return (
    	   <p>Hello, <input="text" placeholder="Enter your name"/>!
	   It is {this.props.date.toTimeString()}
	   </p>
	   );
	   }
});
setInterval(function(){
    React.render(
	<Hello date={new Date()} />,
	document.getElementById('test')
	);
}, 500);	   