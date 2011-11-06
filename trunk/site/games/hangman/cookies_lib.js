// Cookies Lib
function GetCookie(name) 
{ 
		var key = name + "="; 
		var i = 0; 
		while (i < document.cookie.length) { 
			var j = i + key.length; 
			if (document.cookie.substring(i, j) == key) 
				return GetValue (j); 
			i = document.cookie.indexOf(" ", i) + 1; 
			if (i == 0) 
				break; 
		} 
		return null; 
} 

function SetCookie (name, value) 
{ 
		var argv = SetCookie.arguments; 
		var argc = SetCookie.arguments.length; 
		var expires = (argc > 2) ? argv[2] : null; 
		var path = (argc > 3) ? argv[3] : null; 
		var domain = (argc > 4) ? argv[4] : null; 
		var secure = (argc > 5) ? argv[5] : false; 
		document.cookie = name + "=" + escape (value) + 
			((expires == null) ? "" : ("; expires=" + 
			expires.toGMTString())) + 
			((path == null) ? "" : ("; path=" + path)) + 
			((domain == null) ? "" : ("; domain=" + domain)) + 
			((secure == true) ? "; secure;" : "");
}

function DeleteCookie(strName)
{
	document.cookie = strName + "=0; expires=" 
					+ (new Date(0)).toGMTString();
}

function IsCookieEnabled()
{
		// проверяем существование свойства navigator.cookieEnabled
		if(typeof(navigator.cookieEnabled) != "undefined")
			return navigator.cookieEnabled;
		else
		{
			// если свойство navigator.cookieEnabled 
			// не поддерживается, то просто попробуем
			// установить и получить назад тестовый cookie
			var tmpCookie = "testCookieForCheck";
			SetCookie(tmpCookie, "1");
			if(GetCookie(tmpCookie) != null)
  		{
  			DeleteCookie(tmpCookie);
  			return true;
  		}
			return false;
  	}
}
function GetValue (offset) 
{ 
		var strEnd = document.cookie.indexOf (";", offset); 
		if (strEnd == -1) 
			strEnd = document.cookie.length; 
		return unescape(document.cookie.substring(offset, strEnd)); 
} 