import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "mateus@gmail.com",
    password: "132",
    techs: ["node", "react", "react native", { title: "js", experience: 100 }],
  });

  return response.json({ message: "Hello World" });
}
