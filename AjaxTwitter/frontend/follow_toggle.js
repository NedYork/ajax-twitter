var FollowToggle = function (el) {
  this.$el = $(el);
  this.followState = this.$el.data().initialFollowState;
  this.userId = this.$el.data().userId;
};

FollowToggle.prototype.render = function () {
  if (this.followState === "followed") {
    this.$el.html("Unfollow!");
  } else if (this.followState === "unfollowed") {
    this.$el.html("Follow!");
  }
};

FollowToggle.prototype.changeState = function () {
  this.followState = this.followState === "followed" ? "unfollowed" : "followed";
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var url = this.userId + "/follow.json";
  var type = this.followState === "followed" ? "DELETE" : "POST";

  var success = function (data) {
    console.log(data);
    this.changeState();
    this.render();
  }.bind(this);

  var error = function (xhr, status, error) {
    console.log(error);
  };

  $.ajax({
    url: url,
    type: type,
    success: success,
    error: error
  });


};

module.exports = FollowToggle;
