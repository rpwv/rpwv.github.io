function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
var name = GetURLParameter('n').split("-");
var finalName = name.replace(/,/g, " ");
if (name != "") {
    document.getElementById("name").innerHTML = finalName
} else {
    document.getElementById("name").innerHTML = "Di Tempat"
}