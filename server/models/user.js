const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobile: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: [{ type: mongoose.Types.ObjectId, ref: "Address" }],
    wishlist: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    isBlocked: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    passwordChangedAt: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// giong ham setter ==> no se tu chay vao
userSchema.pre("save", async function (next) {
  // isModifined : return true if password no change, return false if pasword change
  if (!this.isModified("password")) {
    next();
  }
  const salt = bcrypt.genSaltSync(10); // so luong ki tu hash la 10
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods = {
  isCorrectPassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
  createPasswordChangeToken: function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
    return resetToken;
  },
};
module.exports = mongoose.model("User", userSchema);
