//Sidney de Boer: 97055272
//Function: maakCookie
//Parameters: naam, waarde, dagen
//return:
//doel: een cookie maken
function maakCookie(naam, waarde, dagen){
    if(dagen){
        datum = new Date();
        datum.setTime(datum.getTime() + (dagen*24*60*60*1000));
        verloopdatum = '; expires = ' + datum.toGMTString();
    }else{
        verloopdatum = '';
    }
    document.cookie = naam + '=' + waarde + verloopdatum + ';path=/';
}
//function: leesCookie
//parameters: naam
//return: waarde van de cookie
//doel: de waarde van een cookie retourneren
function leesCookie(naam){
    var naamCookie = naam + '=';
    var cookieArray = document.cookie.split(';');
    for(var i=0; i < cookieArray.length; i++){
        var dezeCookie = cookieArray[i];
        dezeCookie = dezeCookie.trim();
        if(dezeCookie.indexOf(naamCookie) == 0){
            return dezeCookie.substring(naamCookie.length, dezeCookie.length);
        }
    }
}
//Function: deleteCookie
//parameters: naam
//return: expiration date vandaag
//doel: verwijderen van cookies
function verwijderCookie(naam){
    nieuweDatum = new Date();
    nieuweDatum.setTime(nieuweDatum.getTime() - (1000*60*60*24));
    nieuweVerloopDatum = "expires=" + nieuweDatum.toGMTString();
    window.document.cookie = naam + "=; " + nieuweVerloopDatum + ';path=/';
}
//FUNCTION: VerwijderAlleCookies
//PARAMETERS: Null
//RETURNS: Null
//PURPOSE: Alle cookies verwijderen
function verwijderAlleCookies() {
    for(z=0;z < 6; z++){
        verwijderCookie(z);
    }
}