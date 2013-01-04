(function () {
  function parseForm (form) {
    var fields = {};
    var fieldArray = $(form).serializeArray();

    _.each(fieldArray, function (field) {
      fields[field.name] = field.value;
    });

    return fields;
  }

  Template.add_message.events({
    "submit form": function (e, tmpl) {
      e.preventDefault();

      var form = tmpl.firstNode;
      var input = tmpl.find("textarea");
      var fields = parseForm(form);

      form.reset();
      input.focus();

      Session.set("message", fields.message);
    }
  });

  Template.show_message.helpers({
    message: function () {
      return Session.get("message") || "No message yet!";
    }
  });
}());

