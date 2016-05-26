export default function() {
  if (!Meteor.users.findOne()) {
    Accounts.createUser({
      email: "jd@snapzio.com",
      password: "password123",
    });
  }
}
