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
  describe("have get method that", function() {
    var len = 0;

    beforeEach(function() {
      x = oop.get(len);
    }); 
    afterEach(function() {
      len = oop.notes.length;
    }); 

    it("retrieves a note using a specified id", function() {
      expect(typeof(x)).toBe('string');
    });

    it("throws error if requested note id does not exist", function() {
      console.log("exception: " + oop.get(len));
      expect(oop.get).toThrow();
    });
});
  

  // check search method - return found result
  describe("have search method that", function() {
    var term = "for";
    beforeEach(function() {
      x = oop.search(term);
    }); 
    afterEach(function() {
      term = "unknown";
    }); 

    it("finds a specified search term", function() {
      expect(x.length).toBeGreaterThan(0);
    });
    it("throws error if requested search term not found", function() {
      expect(oop.search).toThrow();
    });
  });
  

  //check delete method
  describe("have delete method that should", function() {
    it()
  });
});