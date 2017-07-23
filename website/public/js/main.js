$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
       if (typeof loadMore !== 'undefined') {
           loadMore();
       }
   }
});

function generateId(length) {
    var retval = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++)
        retval += possible.charAt(Math.floor(Math.random() * possible.length));

    return retval;
}

function getCookie(name, defaultValue) {
    var retval = defaultValue;
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
