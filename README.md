
**In a webpage its a very big to deal to encrypt our source code but however there are some prevention where we can add in our website just by writing some javascript. This will somwhow help us to save our code from theft and copying. Desabling Right mouse click and Different keyboard shortcut keys are one of those.**

Lets see how we can do this..

First Write the Following JavaScript code on the <Head> Section of your index.html file.
  ```JavaScript
        
<!--

//Disable right mouse click and Cltrl keys Script
//By Prashant Bhandari
var message="Function Disabled!"; //This meesage will be shown when user try to do respected funtions.
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

```
Index.html File should be looked as:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Funtion Desable</title>
      <script>
      
//Disable right mouse click and Cltrl keys Script
//By Prashant Bhandari
var message="Function Disabled!"; //This meesage will be shown when user try to do respected funtions.
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
      </script>
 </head>
  <body onkeypress="return disableCtrlKeyCombination(event);" onkeydown="return disableCtrlKeyCombination(event);"> //Calling the funtion desableCtrlKeyCombination(event) from Script.js
   //Your Code goes here.. 
  </body>
  </html
  
```

