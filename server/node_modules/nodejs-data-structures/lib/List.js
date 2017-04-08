var List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
};


List.prototype = {

    clear:function(){
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    },
    find: function(element) {
        for(var i=0;i<this.dataStore.length;i++) {
            if(this.dataStore[i] === element){
                return i;
            }
        }
        return -1;
    },
    toString: function(){
        return this.dataStore;
    },
    insert: function(element, after) {
        var insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0 , element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    append: function(element) {
        this.dataStore[this.listSize++] = element;
    },
    remove: function(element) {
        var foundAt = this.find(element);
        if(foundAt > -1){
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    },
    first: function() {
        this.pos = 0;
    },
    last: function() {
        this.pos = this.listSize -1;
    },
    prev: function() {
        if(this.pos > 0) {
            --this.pos;
        }
    },
    next: function() {
        if(this.pos < this.listSize -1) {
            ++this.pos;
        }
    },
    length: function() {
        return this.listSize;
    },
    currPos: function() {
        return this.pos;
    },
    moveTo: function(position) {
        this.pos = position;
    },
    getElement: function() {
        return this.dataStore[this.pos];
    },
    contains: function(element) {
        for(var i=0;i<this.dataStore.length;++i){
            if(this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

};


module.exports = List;
