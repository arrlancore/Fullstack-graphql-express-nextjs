export const getUsersResolver = (parent, args, { models }) => {
  return models.User.find({}, null, { sort: "-createdAt" });
};

export const getUserResolver = (parent, { id }, { models }) => {
  return models.User.findById(id).cache(id);
};

export const myProfileResolver = (parent, args, { user, models }) => {
  if (!user) {
    return null;
  }
  return models.User.findById(user.id).cache(user.id);
};
