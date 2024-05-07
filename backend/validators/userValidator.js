const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must be atleast 3 characters long" })
    .max(50, {
      message: "username must be less than 50 characters",
    }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "enter valid email" })
    .min(3, { message: "username must be atleast 3 characters long" })
    .max(50, {
      message: "username must be less than 50 characters",
    }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10)
    .max(10),
  password: z
    .string({ required_error: "password is required" })
    .min(6, {
      message: "password must be atleast 6 characters long",
    })
    .max(50, {
      message: "password must be less than 50 characters",
    }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "enter valid email" })
    .min(3, { message: "username must be atleast 3 characters long" })
    .max(50, {
      message: "username must be less than 50 characters",
    }),
  password: z
    .string({ required_error: "password is required" })
    .min(6, {
      message: "password must be atleast 6 characters long",
    })
    .max(50, {
      message: "password must be less than 50 characters",
    }),
});

module.exports = {signupSchema, loginSchema};
