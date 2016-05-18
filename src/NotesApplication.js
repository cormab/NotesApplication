'use strict';

function NotesApplication(author) {
	this.author = author; // Take in a parameter author as the author of the note and saves this as an instance variable

	this.notes = []; // Create a notes list to store all the notes as an instance property.
	
	// create(note_content) - This function takes the note content as the parameter and adds it to the notes list of the object.
	this.create = function (note_content){
		this.notes.push(note_content);
	};
	
	// listNotes() - This function lists out each of the notes in the notes list in the following format. The note_id parameter below represents the respective index of each of the items in the list, the NOTE_CONTENT represent the note content and the author represents the note author.
	this.listNotes  = function () {
		for(let index = 0; index < this.notes.length; index++) {
			console.log(
				"Note ID: " + index + "\n" +
				this.notes[index] + "\n" +
				"By Author: " + this.author + "\n\n"
			);
			/*document.write(
				"Note ID: " + index + "<br/>" +
				this.notes[index] + "<br/>" +
				"By Author: " + this.author + "<br/><br/>"
			);*/
		}
	};
	
	// get(note_id) - This function takes a note_id which refers to the index of the note in the notes list and returns the content of that note as a string.
	this.get = function (note_id) {
		if(note_id >= 0 && note_id < this.notes.length) {
			return this.notes[note_id];
		} else {
			return "Note ID is out of bounds";
		}
	};
	
	// search(search_text) - This function take a search string, search_text and returns all the notes with that text within it in the following format
	this.search = function (search_text) {
		var result = [];
		for(let index = 0; index < this.notes.length; index++) {
			if (this.notes[index].includes(search_text)) {
				result.push(this.notes[index]);
			}
		}
		if(result.length > 0) {
			return result;
		} else {
			return "Search text not found";
		}		
	};
}

// Checking to make sure code works
/*
var oop = new NotesApplication("Morolake");
oop.create("OOP stands for Object Oriented Programming. OOP is a way of programming that makes use of objects with attributes and behaviours(methods)");
//oop.create("The main features of OOP are: Data Encapsulation, Inheritance and Polymorphism");
//oop.create("Some OOP languages are JavaSript, Python, Java, Ruby, C/C++, etc");
oop.listNotes();
console.log("\nResult of running get: " + oop.get(0));
console.log("\nResult of running search: " + oop.search("main"));	
*/

