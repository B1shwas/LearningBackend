import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  let token = req.cookies?.["access-token"] || req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    token = token.replace("Bearer ", "");
  }

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
  console.log(decodedToken);

  const user = await User.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );
  if (!user) {
    throw new ApiError(401, "Unauthorized request");
  }

  req.user = user;
  next();
});
