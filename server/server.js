(function () {
  Meteor.methods({
    createMessage: function (fields) {
      var msg = fields.message;
      var re = /@\w+/g;

      var parseForUsers = function (match) {
        var user = match.replace("@", "");
        var link = "/users/" + user;
        return "<strong><a href='" + link + "'>" + match + "</a></strong>";
      };

      return msg.replace(re, parseForUsers);
    }
  });
}());
