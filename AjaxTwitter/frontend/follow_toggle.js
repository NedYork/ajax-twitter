var FollowToggle = function (el) {
  this.$el = $(el);
  this.followState = this.$el.data().initialFollowState;
  this.userId = this.$el.data().userId;

  this.$el.on("click", this.handleClick.bind(this));
  this.render();
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
  this.$el.off("click");
  var url = this.userId + "/follow";
  var type = this.followState === "followed" ? "DELETE" : "POST";

  var that = this;

  var complete = function () {
    that.$el.on("click", that.handleClick.bind(that));
  };

  var success = function (data) {
    console.log(data);
    that.changeState();
    that.render();
  };

  var error = function (xhr, status, error) {
    console.log(error);
  };

  $.ajax({
    url: url,
    type: type,
    dataType: "json",
    success: success,
    error: error,
    complete: complete
  });


};

module.exports = FollowToggle;
