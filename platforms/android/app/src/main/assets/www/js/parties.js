function viewDetail(party){
	navigator.notification.alert(
    `Contact information: xxx-xxx-xxxx 
    Address: 123 Imaginary Lane `,  // message
    alertDismissed,         // callback
    'Contact Information',            // title
    'Done'                  // buttonName
	);
	navigator.notification.beep(1);
}


function alertDismissed() {

}
