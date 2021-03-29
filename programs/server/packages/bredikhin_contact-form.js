(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var Schema;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/bredikhin_contact-form/contact-form.js                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Schema = Schema || {};
Schema.contactForm = new SimpleSchema({
  name: {
    type: String,
    label: 'Your name',
    max: 64
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Your e-mail"
  },
  subject: {
    type: String,
    label: "Subject",
    max: 256
  },
  message: {
    type: String,
    label: "Message",
    max: 1024
  }
});

///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/bredikhin_contact-form/server/contact-form.js            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({
  sendEmail: function(data) {
    check(data, Schema.contactForm);

    var text = "Name: " + data.name + "\n\n"
    + "Email: " + data.email + "\n\n\n\n"
    + "Subject: " + data.subject + "\n\n"
    + data.message;

    this.unblock();

    Email.send({
      to: Meteor.settings.contactForm.emailTo,
      from: data.email,
      subject: "Website Contact Form - Message From " + data.name,
      text: text
    });
  }
});

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['bredikhin:contact-form'] = {};

})();
