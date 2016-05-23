export default function() {
  if (!Meteor.users.findOne()) {
    Accounts.createUser({
      email: "jd@snapzio.com",
      password: "password123"
    });
    console.log('Created admin! username: jd@snapzio.com / password: password123');
  }
}
