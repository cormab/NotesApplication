/*beforeEach(function() {
  var note = new NotesApplication("author");
});*/

describe("NotesApplication should", function() {
  var oop;
  var content;

  beforeEach(function() {
    oop = new NotesApplication("author");
    content = "OOP stands for Object Oriented Programming."
    oop.create(content);
  }); 

  it("create author variable when initialised", function() {
    expect(oop.author).toBeDefined();
  });

  //check that the note list is created
  it("create notes list when initialised", function() {
    expect(oop.notes).toBeDefined();
  });

  //check the create method works
  it("add content to its notes list", function() {
    //spyOn(oop, 'create');
    //content = "Some OOP languages are JavaSript, Python, Java, etc";
    //oop.create(content);
    //expect(oop.create).toHaveBeenCalled();
    expect(oop.notes[oop.notes.length-1]).toBe(content);
  });

  //check listNotes method
  it("show notes that have been saved", function() {
    spyOn(oop, 'listNotes');
    oop.listNotes();
    expect(oop.listNotes).toHaveBeenCalled();
  });

  //check get method
  describe("have get method that should", function() {
    var x;
    beforeEach(function() {
      spyOn(oop, 'get');
      var len = oop.notes.length;
      var x = oop.get(len-1);
      var y = oop.get(len);

    }); 

    it("retrieve a note using a specified id", function() {
      console.log(typeof(x));
      expect(typeof(x)).toBe('string');
    });

    it("throw error if requested note id does not exist", function() {
      expect().toThrow();
    });
});
  

  // check search method - return found result
  it("find a specified search term", function() {
    spyOn(oop, 'search');
    var result = oop.search("for");
    console.log(oop.search("for"));
    //expect(oop.search).toHavebeenCalled();
    expect(typeof(oop.search("for"))).toBe('string');
  });

  //
});