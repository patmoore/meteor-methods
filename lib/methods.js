(function () {
  Meteor.methods({
    createMessage: function (fields) {
      var msg = fields.message;
      var re = /@\w+/g;

      if (this.isSimulation) {
        Session.set("message", fields.message);
        return;
      }

      var parseForUsers = function (match) {
        var users = ["chris", "bob"];
        var user = match.replace("@", "");
        var link = "/users/" + user;

        if (users.indexOf(user) === -1)
          throw new Meteor.Error(404, "User not found!", "Some details");

        return "<strong><a href='" + link + "'>" + match + "</a></strong>";
      };

      var bogus;

      for (var i = 0; i < 2000000000; i++) {
        bogus = i;
      }

      return msg.replace(re, parseForUsers);
    }
  });
}());
