//TODO:read file and get all users
const users = require("./users.json");
const getFirstUser = () => {
  //TODO: get first user of list
  if (!users.length) {
    console.log("No users found");
  } else {
    console.log(users[0]);
  }
};

const getLast = () => {
  //TODO: get last user of list
  if (!users.length) {
    console.log("No users found");
  } else {
    console.log(users[users.length - 1]);
  }
};

const getUserByID = (userID) => {
  //TODO: get user object by id
  const user = users.find((user) => user.id === userID);
  if (!user) {
    console.log("No user found");
  } else {
    console.log(user);
  }
};

const getUserByCompanyName = (companyName) => {
  //TODO: get user object by company name
  const user = users.find((user) => user.company.name === companyName);
  if (!user) {
    console.log("No user found");
  } else {
    console.log(user);
  }
};

const getUsersByCity = (city) => {
  //TODO: get users that live in this city
  const user = users.find((user) => user.address.city === city);
  if (!user) {
    console.log("No user found");
  } else {
    console.log(user);
  }
};

const getStreet = (userID) => {
  //TODO: get street name by userID
  const user = users.find((user) => user.id === userID);
  if (!user) {
    console.log("No user found");
  } else {
    console.log(user.address.street);
  }
};

const addNewUser = (userObject) => {
  //TODO: add new user to the list
  users.push(userObject);
  console.log("User added");
};

const updateUser = (userID) => {
  //TODO: update email when id === userID
  //NOTE: its not written in the task but I assumed that the email will be updated with a new email
  //NOTE: I did manupulate the email address of the user in the users object not the file itself
  const user = users.find((user) => user.id === userID);
  if (!user) {
    console.log("No user found");
  } else {
    user.email = "newEmail@domain.com";
    console.log(user);
  }
};
const deleteUserById = (userID) => {
  //TODO: remove user when id === userID
  if (!users.length) {
    console.log("No users found");
  } else {
    users.splice(userID, 1);
    console.log("User deleted");
  }
};
