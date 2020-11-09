function Jsession() {

  var setCookie = function (cname, cvalue, exh = 1, path = "/") {
    var d = new Date();
    d.setTime(d.getTime() + (exh * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path;
  }
  var getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var inc = decodedCookie.split(';');
    for (var i = 0; i < inc.length; i++) {
      var x = inc[i];
      while (x.charAt(0) == ' ') {
        x = x.substring(1);
      }
      if (x.indexOf(name) == 0) {
        return x.substring(name.length, x.length);
      }
    }
    return "";
  }
  var delete_cookie = function (name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  var checkCookie = function (cname) {
    var c = getCookie(cname);
    if (c != "" && c != null) {
      return true
    } else {
      return false
    }
  }

  var isSes = function isAuth() {
    var t = checkCookie('jsession_token');
    if (t) {
      return true;
    } else {
      return false;
    }
  }
  var setSes = function (token, exp=1) {
    setCookie('jsession_token', token, exp);
  }
  var finishSes = function () {
    delete_cookie('jsession_token');
  }
}
Jsession()
