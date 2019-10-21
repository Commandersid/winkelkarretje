// FUNCTION: bestellen
// PARAMETERS: Form object
// RETURNS: Cookie met bestelling info
// PURPOSE: Cookie maken met info bestelde item
function bestellen(thisForm){
    productInfo =
        thisForm.id.value + '|' +
        thisForm.merk.value + '|' +
        thisForm.model.value + '|' +
        thisForm.geheugen.value + '|' +
        thisForm.prijs.value + '|' +
        thisForm.aantal.value + '|' +
        thisForm.prijs.value*thisForm.aantal.value + '|' +
        thisForm.verwijderen.value;
    
    maakCookie (thisForm.id.value, productInfo,1);
    
    notice = thisForm.aantal.value + ' ' +
        thisForm.merk.value +
        ' in winkelwagen.';
    alert(notice);
}

// FUNCTION: cartWeergeven
// PARAMETERS: null
// RETURNS: productenLabel
// PURPOSE: Geeft productentabel weer in html
// Formaat
function cartWeergeven() {
    tabelrij = '';
    for(var i = 0; i <= 6; i++){
        dezeCookie = leesCookie(i);
        if(dezeCookie == null || dezeCookie == 'niet-gevonden')
            {continue}
        velden = new Array();
        velden = dezeCookie.split('|');
        tabelrij += '<tr>'+
            '<td>' + velden[0] + '</td>' +
            '<td>' + velden[1] + '</td>' +
            '<td>' + velden[2] + '</td>' +
            '<td>' + velden[3] + '</td>' +
            '<td>' + velden[4] + '</td>' +
            '<td>' + velden[5] + '</td>' +
            '<td>' + velden[6] + '</td>' +
            '<td><a href="managecart.html" onclick="verwijderCookie(velden[7])"><img src="images/delete.jpg" height="20px" width="20px"></a>' 
            '</tr>';
    }
    document.write(tabelrij);
}