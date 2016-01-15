var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');

$(function () {

  $(".users-search").each(function (index, el) {
    new UsersSearch(el);
  });

  $(".follow-toggle").each(function (index, el) {
    new FollowToggle(el);
  });
});
