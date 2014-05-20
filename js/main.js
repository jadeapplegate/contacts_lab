
//Seed our contact app with this data
// var seedContacts = [{}];
//loop through and pass in value of seed data

$(document).ready(function(){

   $('input').keypress(function(e){
     if(e.which == 13){
       e.preventDefault();
	     var name = $('#name').val();
	     var phone = $('#phone').val();
	     var email = $('#email').val();
	     var photo = $('#photo').val();
	     var contact = { cid: contactsLength(), name: name, phone: phone, email: email, photo: photo }
       addContact(contact);
     };
   }); 


	var addContact = function(contact){
		var photo ="<img src='"+contact.photo+"'>";
		var editButton = "<span class='edit-contact'>Edit</span>";
		var deleteButton = "<span class='delete-contact'>Delete</span>";
		var newContact = "<li id='"+contact.cid+"' data-name='"+contact.name+"' data-phone='"+contact.phone+"' data-email='"+contact.email+"' data-photo='"+contact.photo+"'>" + photo + contact.name + " " + contact.phone + " " + contact.email + " " + editButton + " " + deleteButton + "</li>";
		$(newContact).hide().appendTo('ul').fadeIn(500);
  };

	 $('ul').on("click", ".delete-contact", function(){
	 		$(this).parent().fadeOut(500, function(){
	 			$(this).remove();
	 		});
	 });

	 $('ul').on("click", ".edit-contact", function(){
	 	  var name = $(this).parent().attr("data-name");
	 	  $('#name').val(name);
	 		var phone = $(this).parent().attr("data-phone");
	 	  $('#phone').val(phone);
	 	  var email = $(this).parent().attr("data-email");
	 	  $('#email').val(email);
	 	  var photo = $(this).parent().attr("data-photo");
	 	  $('#photo').val(photo);

	 		$(this).parent().fadeOut(500, function(){
	 			$(this).remove();
	 			this.reset;
	 		});
	 });

	 var contactsLength = function(){
	 	 return $('li').length;
	 };


});