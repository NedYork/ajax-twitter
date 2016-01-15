var FollowToggle = require("./follow_toggle");
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

  this.$ul.html("");

  var that = this;
  var success = function (data) {
    $(data).each(function (i, el) {
      var $li = $("<li>").html(el.username);
      that.$ul.append($li);

      var $button = $("<button>").addClass("follow-toggle");
      // don't hard code initial follow state !!!
      $button.attr({ "data-initial-follow-state": "followed", "data-user-id": el.id });
      that.$ul.append($button);
      new FollowToggle($button[0]);
    });
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
