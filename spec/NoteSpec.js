/*beforeEach(function() {
  var note = new NotesApplication("author");
});*/

describe("NotesApplication", function() {
  var oop;

  beforeEach(function() {
    oop = new NotesApplication("author");
    //spyOn(oop, "create");
    spyOn(oop, "listNotes");
  }); 

  it("should create author variable when initialised", function() {
    expect(oop.author).toBeDefined();
  });

  //check that the note list is created
  it("should create notes list when initialised", function() {
    expect(oop.notes).toBeDefined();
  });

  //check the create method works
  it("should add content to its notes list", function() {
    spyOn(oop, 'create');
    //spyOn(oop, "listNotes");
    //var content = "OOP stands for Object Oriented Programming."
    oop.create("OOP stands for Object Oriented Programming.");
    console.log(oop.notes);
    expect(oop.create).toHaveBeenCalled;
    expect(oop.notes[oop.notes.length-1]).toBe(content);
  });

  //check listNotes method
  it("should show notes that have been saved", function() {
    //spyOn(oop, "create");
    //spyOn(oop, "listNotes");
    var content = "Some OOP languages are JavaSript, Python, Java, etc"
    oop.create("Some OOP languages are JavaSript, Python, Java, etc");
    oop.listNotes();
    //expect()
  });
});