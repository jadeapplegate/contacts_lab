
//Seed our contact app with this data
// var seedContacts = [{}];
//loop through and pass in value of seed data

$(document).ready(function(){
	var contacts =  [];

   $('input').keypress(function(e){
     if(e.which == 13){
       e.preventDefault();
	     var name = $('#name').val();
	     var phone = $('#phone').val();
	     var email = $('#email').val();
	     var photo = $('#photo').val();
	     contact = { cid: contacts.length, name: name, phone: phone, email: email, photo: photo }
       addContact(contact);
       addToContactsArray;
     };
   }); 

   var addToContactsArray = function(contact){
   	 contacts = contacts.push(contact);
   };

 //  var sports = ["soccer", "baseball"];
	// var total = sports.push("football", "swimming");

	// console.log(sports); // ["soccer", "baseball", "football", "swimming"]
	// console.log(total);  // 4

	var addContact = function(contact){
       var newContact = "<li id='"+contact.cid+"'>" + contact.name + " " + contact.phone + " " + contact.email + " " + "<span class = 'edit'>Edit</span></li>"
       $(newContact).hide().appendTo('ul').fadeIn(500);
    };



 });

