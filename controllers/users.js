var User = require("../models/user");


exports.testing = function (req, res) {
  res.send("Greetings from the User test controller!");
};

exports.userCreate = function (req, res) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    phoneNo: req.body.phoneNo,
  });

  user.save(function (err) {
    if (err) {
      console.log(err);
    }
    res.send("Users Created successfully");
  });
};

exports.userDetails = async (req, res) => {
  try {
    userDetails = await User.findById({ _id: req.params.userid });

    if (!userDetails) {
      return res.status(200).send({ message: "User not exists in data" });
    }
    res.status(200).send(userDetails);
  } catch (err) {
    res.status(500).json({
      error: error,
    });
  }
};

exports.userUpdate = async (req, res) => {
  try {
    updateUser = await User.findByIdAndUpdate(
      { _id: req.params.userid },
      { $set: req.body }
    );
    if (!updateUser) {
      return res.status(200).send({ message: "User not exists in data" });
    }
    res.status(200).send(updateUser);
  } catch (err) {
    res.status(500).json({
      error: error,
    });
  }
};

exports.userDelete = async (req, res) => {
  try {
    deleteUser = await User.findByIdAndRemove({ _id: req.params.userid });

    if (!deleteUser) {
      return res.status(200).send({ message: "User has been deleted" });
    }
    res.status(200).send(deleteUser);
  } catch (err) {
    res.status(500).json({
      error: error,
    });
  }
};

exports.userFirstName = async (req, res) => {
  try {
    var query = { firstName: req.params.firtstname };
    filterFirstName = await User.find(query);
    if (!filterFirstName) {
      return res.status(200).send({ message: "User not exists" });
    }
    res.status(200).send(filterFirstName);
  } catch (err) {
    res.status(500).json({
      error: error,
    });
  }
};


exports.userLastName = async (req, res) => {
    try {
      var query = { lastName: req.params.lastsname };
      filterLastName = await User.find(query);
      if (!filterLastName) {
        return res.status(200).send({ message: "User not exists" });
      }
      res.status(200).send(filterLastName);
    } catch (err) {
      res.status(500).json({
        error: error,
      });
    }
  };

  

  exports.userEmails = async (req, res) => {
    try {
      var query = { emailId: req.params.emailid };
      filterEmails = await User.find(query);
      if (!filterEmails) {
        return res.status(200).send({ message: "User not exists" });
      }
      res.status(200).send(filterEmails);
    } catch (err) {
      res.status(500).json({
        error: error,
      });
    }
  };

  

  exports.userPhones = async (req, res) => {
    try {
      var query = { phoneNo: req.params.phone };
      filterPhone = await User.find(query);
      if (!filterPhone) {
        return res.status(200).send({ message: "User not exists" });
      }
      res.status(200).send(filterPhone);
    } catch (err) {
      res.status(500).json({
        error: error,
      });
    }
  };
  