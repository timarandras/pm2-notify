'use strict';
module.exports = {
  mail: {
    from: "me@example.com",
    to: "you@example.com"
  },
  // see https://github.com/andris9/nodemailer-smtp-transport#usage
  smtp: {
    host: "smtp.gmail.com",
    port: 25
  },
  // Events list:
  // - restart
  // - delete
  // - stop
  // - restart overlimit
  // - exit
  // - start
  // - online
  events: ['exit'],
  template: './template.md',
  // this is the process subject if there is only one event to be mailed
  subject: '<%= process.name %> errored (<%= process.NODE_ENV %>)',
  // if multiple events are going to be mailed, use a global subject:
  multiple_subject: 'Error on <%= hostname %>',
  // wait for 2.5 seconds after each event before sending an email - avoid spam when a lot of events happened
  polling: 2500,
  // attach your process logs to the email
  attach_logs: true
}