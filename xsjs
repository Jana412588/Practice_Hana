--------------------Simple function with the return result -----------------------

function calculatemult(val1, val2)
{
	return val1*val2;

}

var result = calculatemult(5,3);

$.response.setBody(result.toString());

calling the Service from the Browser https://hxehost:51056/xsjs/calculate.xsjs

The Browser URL should has to pass the folder name Xsjs/ followed by the xsjs file name in the front end to call.

------------------------Simple function with the Requesting the Parameter values at run time-----------------

function calculatemult(val1, val2)
{
	return val1*val2;

}
num1 = $.request.parameters.get('valueone');

num2 = $.request.parameters.get('valuetwo');

var result = calculatemult(num1,num2);

$.response.setBody(result.toString());

Calling the service with the two input Parameters 

https://hxehost:51056/xsjs/CalculatWithParameters.xsjs?valueone=10&valuetwo=20

------------------------Simple function with the Requesting the Parameter values at run time-----------------
---------------------Handling the Errors if passing at run time to user while calling the Server--------------

function calculatemult(val1, val2)
{
	return val1*val2;

}
num1 = $.request.parameters.get('valueone');

num2 = $.request.parameters.get('valuetwo');

if(num1 && num2)
{

var result = calculatemult(num1,num2);

$.response.setBody(result.toString());
}
else
{
	$.response.setBody("Please correct your input");
}

calling the service with the Incorrect valuetw at run time in the browser prompting the error message output to the browser.

https://hxehost:51056/xsjs/CalculatWithParameters.xsjs?valueone=10&valuetw=20

Ouput in the web browser:----Please correct your input---
