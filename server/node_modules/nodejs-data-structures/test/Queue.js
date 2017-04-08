'use strict';
var Queue = require("../lib/Queue");
var assert = require("assert");
describe("Queue",function() {
    var queue;
    beforeEach(function() {
        queue = new Queue();
    });

    it("should not be undefined on initialization",function() {
        assert(queue,!undefined);
    });

    it("should intialize dataStore to an empty array",function() {
        assert(queue.dataStore,[]);
    });

    describe("enqueue",function() {
        it("should insert the element at the front", function() {
            queue.enqueue("Ironman");
            assert(queue.dataStore[0] === "Ironman");
        });

        
    });

    describe("dequeue", function() {
        beforeEach(function() {
            queue.enqueue("Ironman");
            queue.enqueue("Batman");
        });

        it("should remove the element from the front", function() {
            assert(queue.dequeue() === "Ironman");
        });

        it("should decrement the length of queue", function() {
            queue.dequeue();
            assert(queue.dataStore.length === 1);
        });
    });

    describe("front", function() {
        it("should return the first element in queue", function() {
            queue.enqueue("Ironman");
            queue.enqueue("Batman");
            assert(queue.front() === "Ironman");
        });
    });

    describe("back", function() {
        it("should return the last element in queue", function() {
            queue.enqueue("Ironman");
            queue.enqueue("Batman");
            assert(queue.back() === "Batman");
        });
    });

    describe("toString", function() {
        it("should return all elements in the queue", function() {
            queue.enqueue("Ironman");
            queue.enqueue("Batman");
            assert(queue.toString() === "Ironman\nBatman\n");
        });
    });


    describe("empty", function() {
        it("should return true if queue is empty",function() {
            assert(queue.empty());
        });

        it("should return false if queue is not empty", function() {
            queue.enqueue("Ironman");
            assert(!queue.empty());
        });
    });

});
