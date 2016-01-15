var FollowToggle = function (el) {
  this.$el = $(el);
  this.followState = this.$el.data("initialFollowState");
  this.userId = this.$el.data("userId");

  this.$el.on("click", this.handleClick.bind(this));
  this.render();
};

FollowToggle.prototype.render = function () {
  // debugger
  switch (this.followState) {
    case "followed":
      this.$el.html("Unfollow!").removeProp("disabled");
      break;
    case "unfollowed":
      this.$el.html("Follow!").removeProp("disabled");
      break;
    default:
      this.$el.prop("disabled");
  }


  // if (this.followState === "followed") {
  //   this.$el.html("Unfollow!");
  // } else if (this.followState === "unfollowed") {
  //   this.$el.html("Follow!");
  // }
};

FollowToggle.prototype.changeState = function () {
  this.followState = this.followState === "followed" ? "unfollowed" : "followed";
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();

  // change followed state to -ing
  this.$el.off("click");

  if (this.followState === "followed") {
    this.followState = "unfollowing";
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
  }

  var url = this.userId + "/follow";
  var type = this.followState === "unfollowing" ? "DELETE" : "POST";

  var that = this;

  var complete = function () {
    that.$el.on("click", that.handleClick.bind(that));
  };

  var success = function (data) {
    if (that.followState === "unfollowing") {
      that.followState = "unfollowed";
    } else if (that.followState === "following") {
      that.followState = "followed";
    }
    // that.changeState();
    that.render();
  };

  var error = function (xhr, status, error) {
    if (that.followState === "unfollowing") {
      that.followState = "followed";
    } else if (that.followState === "following") {
      that.followState = "unfollowed";
    }
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
