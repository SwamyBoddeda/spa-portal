var qs = (function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

var url = (window.location.origin) ? window.location.origin + '/' : window.location.protocol + '//' + window.location.host + '/';

if (qs["sa-ga-token"]) {
    window.sessionStorage.setItem("sa-ga-token", qs["sa-ga-token"]);
}

// Capture AMS data 
if (qs["producerCode"] && qs['lob'] && (qs['nameOfBusiness'] || (qs['firstName'] && qs['lastName'])) && qs['addressLine1'] && qs['city'] && qs['state'] && qs['postalCode'] && qs['effectiveDate']) {

    window.location.href = url + "#/?producerCode=" + qs['producerCode'] + "&lob=" + qs['lob'] + "&nameOfBusiness=" + qs['nameOfBusiness'] + "&firstName=" + qs['firstName'] + "&lastName=" + qs['lastName'] + "&addressLine1=" + qs['addressLine1'] + "&city=" + qs['city'] + "&state=" + qs['state'] + "&postalCode=" + qs['postalCode'] + "&effectiveDate=" + qs['effectiveDate'] + "&expirationDate=" + qs['expirationDate'] + "&ratingState=" + qs['ratingState'] + "&phone=" + qs['phone'] + "&additionalNameOfBusiness=" + qs['additionalNameOfBusiness'] + "&additionalInsuredFirstName=" + qs['additionalInsuredFirstName'] + "&additionalInsuredLastName=" + qs['additionalInsuredLastName'] + "&additionalAddress=" + qs['additionalAddress'] + "&additionalCity=" + qs['additionalCity'] + "&additionalState=" + qs['additionalState'] + "&additionalZipCode=" + qs['additionalZipCode'] + + "&additionalPhone=" + qs['additionalPhone'];
    window.location.href = url + "#/" + window.location.search;

} else if (qs["postalCode"] && qs['lob'] && qs['effectiveDate'] && qs['state'] && qs['account_number']) {
    
    // Capture existing account data
    window.location.href = url + "#/?postalCode=" + qs['postalCode'] + "&state=" + qs['state'] + "&lob=" + qs['lob'] + "&effectiveDate=" + qs['effectiveDate'] + "&account_number=" + qs['account_number'] + "&account_type=" + qs['account_type'];

} else if (qs["postalCode"] && qs['lob'] && qs['effectiveDate'] && qs['state']) {

    // Capture new quote data
    window.location.href = url + "#/?postalCode=" + qs['postalCode'] + "&state=" + qs['state'] + "&lob=" + qs['lob'] + "&effectiveDate=" + qs['effectiveDate'];

} else if (qs["quoteID"] && qs['policyChange']) {

    window.location.href = url + "#/?quoteID=" + qs['quoteID'] + "&policyChange=" + qs['policyChange'];

} else if (qs["quoteID"] && qs['postalCode'] && qs['lob']) {

    window.location.href = url + "#/?quoteID=" + qs['quoteID'] + "&postalCode=" + qs['postalCode'] + "&lob=" + qs['lob'];

} else if (qs["applicationId"]) {

    window.location.href = url + "#/?applicationId=" + qs['applicationId'];
    
}

