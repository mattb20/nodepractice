var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Dwayne Johnson'
  };
  callback(user);
};

getUser(31, (user) => {
  console.log(user.name);
});
