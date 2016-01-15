var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');

$(function () {

  $(".follow-toggle").each(function (index, el) {
    new FollowToggle(el);
  });

  $(".users-search").each(function (index, el) {
    new UsersSearch(el);
  });
});
