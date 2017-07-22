var UCID = getCookie("UCID");
if (UCID == null) {
    UCID = makeId(9);
    setCookie("UCID", UCID, 1000);
}

function makeId(length) {
    var retval = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++)
        retval += possible.charAt(Math.floor(Math.random() * possible.length));

    return retval;
}

function getCookie(name) {
    var retval = null;
    var name = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0) {
            retval = c.substring(name.length, c.length);
        }
    }
    return retval;
}

function setCookie(name, value, expiredDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiredDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}
