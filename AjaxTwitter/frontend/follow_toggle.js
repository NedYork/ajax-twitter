var FollowToggle = function (el) {
  this.$el = $(el);
  this.followState = this.$el.data("initialFollowState");
  this.userId = this.$el.data("userId");

  this.$el.on("click", this.handleClick.bind(this));
  this.render();
};

FollowToggle.prototype.render = function () {
  switch (this.followState) {
    case "followed":
      this.$el.html("Unfollow!").removeProp("disabled");
      break;
    case "unfollowed":
      this.$el.html("Follow!").removeProp("disabled");
      break;
    default:
      this.$el.prop("disabled", true);
  }
};

FollowToggle.prototype.changeState = function () {
  this.followState = this.followState === "followed" ? "unfollowed" : "followed";
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();

  if (this.followState === "followed") {
    this.followState = "unfollowing";
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
  }
  this.render();

  var url = this.userId + "/follow";
  var type = this.followState === "unfollowing" ? "DELETE" : "POST";
  var that = this;

  var success = function (data) {
    if (that.followState === "unfollowing") {
      that.followState = "unfollowed";
    } else if (that.followState === "following") {
      that.followState = "followed";
    }
    that.render();
  };

  var error = function (xhr, status, error) {
    if (that.followState === "unfollowing") {
      that.followState = "followed";
    } else if (that.followState === "following") {
      that.followState = "unfollowed";
    }
    that.render();
  };

  $.ajax({
    url: url,
    type: type,
    dataType: "json",
    success: success,
    error: error
  });
};

module.exports = FollowToggle;
