const bcrypt = require("bcryptjs");

bcrypt.hash("sakshi@2808", 10).then((hash) => {
  console.log(hash);
});