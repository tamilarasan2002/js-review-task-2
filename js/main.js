
var permission=prompt("permission true or false");
var age=parseInt(prompt("Enter your age"))

if(age<50){
	if(age>14){
		document.write("eligible for ride")
	}
	else if(permission=="true"){
		document.write("parent allowed so eligible to ride")
	}
	else{
		document.write("paternt not allowed so not eligble to ride")
	}
}
else{
	document.write("not eligible to ride")
}