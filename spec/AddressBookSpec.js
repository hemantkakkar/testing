describe("Address Book", function() {
	var addressBook,
	    thiscontact;
		
 beforeEach (function() {	
        addressBook = new AddressBook();
		thiscontact = new Contact();

 }); 
		 
	it("should be able to add a contact", function() {
		addressBook.addContact(thiscontact);
		expect(addressBook.getContact(0)).toBe(thiscontact);
	});
	
    it("should be able to delete a contact", function() {
		addressBook.addContact(thiscontact);
		addressBook.deleteContact(0);
		expect(addressBook.getContact(0)).not.toBeDefined;
		
    });
});

describe("Async Address Book", function() {
	var addressBook = new AddressBook();
	
	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {	
		done();
	   });
	});
	
	it("should grab initial contacts", function(done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});