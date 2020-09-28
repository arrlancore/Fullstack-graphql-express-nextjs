async function createUserSeeds(models) {
  const user1 = new models.User({
    username: "awesomeuser",
    createdAt: Date.now(),
    fullName: "Awesome User",
    email: "user@awesomeuser.com",
    password: "Password@123",
    _id: "5e4e555cbf31ef2588e22124",
    role: "USER",
    status: "VERIFIED"
  });
  const user2 = new models.User({
    username: "awesomeadmin",
    createdAt: Date.now(),
    fullName: "Awesome Admin",
    email: "admin@awesomeuser.com",
    password: "Password@123",
    _id: "5e4e555cbf31ef2588e22125",
    role: "ADMIN",
    status: "VERIFIED"
  });

  await user1.save();
  await user2.save();
  console.log("DATA SEEDED");
}

export default createUserSeeds;
