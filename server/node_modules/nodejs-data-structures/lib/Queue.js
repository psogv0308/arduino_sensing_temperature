var Queue = function() {
    this.dataStore = [];
    console.log("Queue created");
};

Queue.prototype = {
    enqueue: function(element) {
        this.dataStore.push(element);
    },
    dequeue: function(){
        return this.dataStore.shift();
    },
    front: function(){
        return this.dataStore[0];
    },
    back: function(){
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function(){
        var retStr = "";
        var ds_length = this.dataStore.length;
        for(var i=0; i < ds_length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    },
    empty: function(){
        return (this.dataStore.length === 0) ? true : false;
    }
};

module.exports = Queue;
