'use strict';
var List = require("../lib/List");
var assert = require("assert");
describe("List", function() {
    var list;

    beforeEach(function() {
        list = new List();
    });
    
    it("should not be undefined when initialized",function() {
        assert(list,!undefined);
    });

    it("should set listSize to 0 on initialization",function() {
        assert.equal(list.listSize,0);
    });

    it("should set pos to 0 on creation", function() {
        assert.equal(list.pos,0);
    });

    it("should have an empty dataStore",function() {
        assert.equal(list.dataStore.length,0);
    });


    describe("clear function",function(){
        
        it("should clear the list",function(){
            list.clear();
            assert.equal(list.dataStore.length,0);
        });

        it("should set listSize to 0", function() {
            assert.equal(list.listSize,0);
        });

        it("should set pos to 0", function() {
            assert(list.pos === 0);
        });
    });

    describe("find function", function() {
        it("should return the index if the element is found", function() {
            list.append("Batman");
            var found = list.find("Batman");
            assert(found > -1);
        });

        it("should return -1 if the element is not found",function(){
            var found = list.find("Ironman");
            assert(found === -1);
        });
    });

    describe("toString",function() {
        it("should return the dataStore",function() {
            list.append("Batman");
            assert(list.toString().indexOf("Batman") > -1);
        });
    });

    describe("insert" ,function() {
        it("should insert element at the desired position",function() {
            list.append("Superman");
            list.append("Batman");
            list.append("Spiderman");
            var inserted = list.insert("Ironman","Batman");
            assert(list.find("Ironman") === 2);
        });

        it("should return true after successfull insertion",function() {
            list.append("Superman");
            list.append("Batman");
            list.append("Spiderman");
            var inserted = list.insert("Ironman","Batman");
            assert(inserted);
        });

        it("should return false after un-successfull insertion", function() {
            var inserted = list.insert("Ironman","Superman");
            assert(!inserted);
        });

        it("should increment listSize after successfull insertion", function() {
            list.append("Batman");
            list.insert("Ironman","Batman");
            assert(list.listSize === 2);
        });


    });

    describe("append",function() {
        it("should add the element at the end of the list",function() {
            list.append("Batman");
            assert(list.find("Batman") === 0);
        });

        it("should increment the listSize", function() {
            list.append("Batman");
            assert(list.listSize === 1);
        });
    });


    describe("remove",function() {
        it("should return true for successfull removal",function() {
            list.append("Batman");
            var removed = list.remove("Batman");
            assert(removed);
        });

        it("should return false for un-successfull removal", function() {
            var removed = list.remove("Batman");
            assert(!removed);
        });

        it("should remove the element from the list", function(){
            list.append("Batman");
            list.remove("Batman");
            assert(list.find("Batman") === -1);
        });

        it("should decrement the listSize after successfull removal", function() {
            list.append("Ironman");
            list.append("Batman");
            list.remove("Batman");
            assert(list.listSize === 1);
        });


    });


    describe("first",function() {
        it("should set the pos to 0",function(){
            list.first();
            assert(list.pos === 0);
        });

    });

    describe("last",function() {
        it("should set the pos to the index of the last element",function() {
            list.append("Ironman");
            list.append("Batman");
            list.last();
            assert(list.pos === list.find("Batman"));
        });
    });

    describe("prev", function() {
        it("should decrement the pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            list.prev();
            assert(list.pos === 0);
            
        });

        it("should not decrement the pos if pos is <= 0", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(0);
            list.prev();
            assert(list.pos === 0);
        });

    });

    describe("next", function() {
        it("should increment the pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.next();
            assert(list.pos === 1);
        });

        it("should not increment the pos if pos is >= listSize", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            list.next();
            assert(list.pos === 1);
        });
    });

    describe("length",function() {
        it("should return the listSize", function() {
            list.append("Ironman");
            list.append("Batman");
            assert(list.length() === 2);
        });
    });

    describe("currPos",function() {
        it("should return the value of pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            assert(list.currPos() === 1);
        });

    });
    
    describe("moveTo",function() {
        it("should set the pos value", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            assert(list.pos === 1);
        });
    });

    describe("getElement",function() {
        it("should return the elememnt at the current position",function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            assert(list.getElement() === "Batman");
        });

    });
    describe("contains",function() {
        it("should return true if element is found", function() {
            list.append("Ironman");
            list.append("Batman");
            assert(list.contains("Batman"));
        });

        it("should return false if element is not found", function() {
            assert(!list.contains("Stan Lee"));
        });
    });

});
    
