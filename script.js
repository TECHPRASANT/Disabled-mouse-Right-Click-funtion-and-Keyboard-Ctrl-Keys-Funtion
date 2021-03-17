      
<!--

//Disable right mouse click and Cltrl keys Script
//By Prashant Bhandari
var message="Function Disabled!";
 $(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {
        alert('message'); //prevent from f12
        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {
        alert('message')
        return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==73)
    {
        alert(message)
        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu",function(e)
{
alert(message)
e.preventDefault();
});


function disableCtrlKeyCombination(e)
{
//list all CTRL + key combinations you want to disable
var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'w' , 'u');
var key;
var isCtrl;
if(window.event)
{
key = window.event.keyCode;     //IE
if(window.event.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}
else
{
key = e.which;     //firefox
if(e.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}
//if ctrl is pressed check if other key is in forbidenKeys array
if(isCtrl)
{
for(i=0; i<forbiddenKeys.length; i++)
{
//case-insensitive comparation
if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
{
alert(message);
return false;
}
}
}
return true;
}
