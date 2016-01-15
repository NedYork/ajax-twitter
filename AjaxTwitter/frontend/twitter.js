var FollowToggle = require('./follow_toggle');

$(function () {

  $(".follow-toggle").each(function (index, el) {
    var toggle = new FollowToggle(el);

    toggle.$el.on("click", toggle.handleClick.bind(toggle));
    toggle.render();
  });

});
