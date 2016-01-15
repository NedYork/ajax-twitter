var UsersSearch = function (nav) {
  this.$nav = $(nav);
  this.$input = this.$nav.children("input");
  this.$ul = this.$nav.children("ul");
  this.eventListener();
};

UsersSearch.prototype.eventListener = function () {
  this.$input.on("keydown", this.handleInput.bind(this));

};

UsersSearch.prototype.handleInput = function (e) {

  console.log(String.fromCharCode(e.keyCode));

  
};


module.exports = UsersSearch;
