var FollowToggle = require('./follow_toggle');

$(function () {

  $(".follow-toggle").each(function (index, el) {
    new FollowToggle(el);
  });

});
