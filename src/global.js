/* Running tests in JSTestDriver require 3 steps
	1) Start the server $JSTESTDRIVER --port 4224 (I have a bash variable im using to shorten things up)
	2) Capture the browser: open the browser to <server_path:port> so localhost:4224
	3) Run the tests in a new terminal tab: $JSTESTDRIVER --tests all

	-- Optional --------------------------------------------------------------------------------
	There is a ruby package called jstdutil. It will give you color output and will auto run
	your tests using watchr.

	To install it do:
	- gem update --system
	- gem install gemcutter
	- gem install jstdutil
	
	To start it: 
	jstestdriver --port 4224
	jstestdriver --tests all

	To enable autotest:
	jsautotest

*/
myapp = {};
    myapp.Greeter = function() { };

	myapp.Greeter.prototype.greet = function(name) {
	return "Hello " + name + ".";
};
