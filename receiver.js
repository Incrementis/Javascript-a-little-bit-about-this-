/*
	NOTE: 
	The output of "console.log" should be watched in the debugger of a browser.
	It should contain more details about the context.
	
	The function "invocingFunction" is invoced within the file "index.html" by
	"onclick = 'new invocingFunction('Oreo','Stiks', 42)'".
	
	Also global vaiables serve here only for demonstartion purposes.
	They should be avoided! 

	It is recommended to understand and play around with the code.
*/



var globe = document.getElementById('global');


function globalVariable()
{
	var results = document.getElementById('results_one');
	
	/*
		ATTENTION - Context of variable "globe"
		"this.globe" exists in the context of window, but as an "HTMLInputElement" object,
		it offers an context in itself.
	*/
	results.innerHTML =  "<li>Tag:<strong> " + this.globe + "</strong></li>";
	results.innerHTML += "<li>Context is window: " + "<strong>" + (this.globe === window.globe) + "</strong></li>";
	results.innerHTML += "<li>Input:<strong> " + this.globe.value + "</strong></li>";
	
	console.log(this.globe);
}



function globalFunction()
{
	
	var results = document.getElementById('results_one');
	
	/*
		ATTENTION - Context of function "globalFunction"
	*/
	results.innerHTML = "<li>Context: <strong>" + this + "</strong></li>";
	
	console.log(this);
}



var newContext =
{
	info: function(myForename, myName, myAge)
	{
		//Getting object attributes within its context
		this.forename 	= myForename;
		this.name 		= myName;
		this.age		= myAge;
		
		
		var results = document.getElementById('results_two');
		
		/*
			ATTENTION - Context of method "info"
		*/
		results.innerHTML =  "<li>Context:<strong> " + this + "</strong></li>";
		results.innerHTML += "<li>Forename:<strong> " + this.forename + "</strong></li>";
		results.innerHTML += "<li>Name:<strong> " + this.name + "</strong></li>";
		results.innerHTML += "<li>Age:<strong> " + this.age + "</strong></li>";
		
		console.log(this);
	},
	forename: 	"",
	name:		"",
	age:		0
}; 



function invocingFunction(myForename, myName, myAge)
{

	this.forename 	= myForename;
	this.name 		= myName;
	this.age		= myAge;
	
	
	var results = document.getElementById('results_two');
	
	/*
		ATTENTION - Context of function "invocingFunction"
	*/
	results.innerHTML =  "<li>Context:<strong> " + this + "</strong></li>";
	results.innerHTML += "<li>Forename:<strong> " + this.forename + "</strong></li>";
	results.innerHTML += "<li>Name:<strong> " + this.name + "</strong></li>";
	results.innerHTML += "<li>Age:<strong> " + this.age + "</strong></li>";
	
	console.log(this);
}



