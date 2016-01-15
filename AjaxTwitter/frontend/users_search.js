var UsersSearch = function (nav) {
  this.$nav = $(nav);
  this.$input = this.$nav.children("input");
  this.$ul = this.$nav.children("ul");
  this.eventListener();
};

UsersSearch.prototype.eventListener = function () {
  this.$input.on("keyup", this.handleInput.bind(this));

};

UsersSearch.prototype.handleInput = function (e) {

  // console.log(this.$input.val());
  var success = function (data) {

  };

  $.ajax({
    url: "search",
    type: "GET",
    data: { query: this.$input.val()},
    dataType: "json",
    success: success,
    error: function () {
      console.log("You SCREWED UP!");
    }
  });

};


module.exports = UsersSearch;
