/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//Browser identifier
function detectBrowserVersion()
{
    var userAgent = navigator.userAgent.toLowerCase();
    var ieVersion = 8;
    var ffVersion = 4;
    // Is this a version of IE?
    if(userAgent.indexOf('msie') != -1)
    {
        userAgent = userAgent.substring(userAgent.indexOf('msie') +5);
        userAgent = userAgent.substring(0,userAgent.indexOf('.'));
        ieVersion = parseInt(userAgent);
    }

    //Is it Firefox?
    if(userAgent.indexOf('firefox') != -1)
    {
        userAgent = userAgent.substring(userAgent.indexOf('firefox/') +8);
        //userAgent = userAgent.substring(0,userAgent.indexOf('.'));
        ffVersion = parseFloat(userAgent);
    }
    if( (ffVersion < 3.5 || ieVersion <= 7) && getCookie('browser_update') !== 'no')
    {
        return true;
    }

    return false;
}


//Read Cookie
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

//Create Cookie
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value     = escape(value) + "; expires=" + exdate.toUTCString() + "; path=/";
    document.cookie = c_name + "=" + c_value;
}