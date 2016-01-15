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
