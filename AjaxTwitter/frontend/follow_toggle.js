var FollowToggle = function (el) {
  this.$el = $(el);
  this.followState = this.$el.data().initialFollowState;
  this.userId = this.$el.data().userId;
};

FollowToggle.prototype.render = function () {
  
};

module.exports = FollowToggle;
