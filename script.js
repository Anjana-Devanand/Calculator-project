function buttonclick(val)
{
	document.getElementById("screen").value+=val
}
function clearDisplay()
{
	document.getElementById("screen").value=""
}
function equalClick()
{
	var text=document.getElementById("screen").value
	var result=eval(text) //eval is a function for calculation in js
	document.getElementById("screen").value=result
}