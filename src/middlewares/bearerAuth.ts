import dotenv from "dotenv";

import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

dotenv.config();

const checkRoles = (requiredRoles: "Admin" | "User" | "Both") => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    (req as any).user = decoded;
    console.log(decoded);

    try {
      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "role" in decoded
      ) {
        if (requiredRoles === "Both") {
          if (decoded.userRole === "Admin" || decoded.role === "User") {
            next();
            return;
          }
        } else if (decoded.role === requiredRoles) {
          next();
          return;
        }
      }
      res.status(401).json({ error: "Invalid payload token" });
    } catch (error: any) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
};

export const adminOnly = checkRoles("Admin");
export const userOnly = checkRoles("User");
export const adminAndUser = checkRoles("Both");
