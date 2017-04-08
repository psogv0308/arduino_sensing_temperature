'use strict';
var Stack = require("../lib/Stack");
var assert = require("assert");
describe("Stack", function() {
    var stack;

    beforeEach(function() {
        stack = new Stack();
    });

    it("should not be undefined when intialized", function() {
        assert(stack,!undefined);
    });

    it("should set dataStore to empty",function() {
        assert(stack.dataStore,[]);
    });

    it("should set top to 0 on initialization",function() {
        assert(stack.top === 0);
    });


    describe("push",function() {
        it("should insert element at the top", function() {
            stack.push("a");
            stack.push("b");
            assert(stack.pop() === "b");
        });

        it("should increment the top value", function() {
            stack.push("a");
            stack.push("b");
            assert(stack.top === 2);
        });
    });

    describe("pop",function() {
        it("should return the element at the top",function() {
            stack.push("a");
            stack.push("b");
            assert(stack.pop() === "b");
        });

        it("should decrement the top value",function() {
            stack.push("a");
            stack.push("b");
            stack.pop();
            assert(stack.top === 1);
        });

        it("should remove the element from the stack",function() {
            stack.push("a");
            stack.push("b");
            stack.pop();
            assert(stack.length() === 1);
        });
    });

    describe("peek",function() {
        it("should return the element at the top", function() {
            stack.push("a");
            stack.push("b");
            assert(stack.peek() === "b");
        });
    });

    describe("length", function() {
        it("should return the number of elements in stack", function() {
            stack.push("a");
            stack.push("b");
            stack.push("c");
            assert(stack.length() === 3);
        });
    });

    describe("clear", function() {
        it("should set the top value to 0",function() {
            stack.push("a");
            stack.clear();
            assert(stack.top === 0);
        });

        it("should clear the datastore", function() {
            stack.push("a");
            stack.clear();
            assert(stack.dataStore,[]);
        });

    });



});
