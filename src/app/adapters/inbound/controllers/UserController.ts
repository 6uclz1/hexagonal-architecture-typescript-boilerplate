import { Request, Response } from "express";
import { GetUserUseCase } from "../../../application/usecase/GetUserUseCase";
import { UserRepositoryForDB } from "../../typeorm/UserRepositoryForDB";
import { DatabaseConfig } from "../../../infrastructure/config/database";

export class UserController {
  public static async getUser(req: Request, res: Response) {
    const database = new DatabaseConfig()
    const userRepository = new UserRepositoryForDB(database);
    const getUserUseCase = new GetUserUseCase(userRepository);

    const userId = req.params.id;
    const result = getUserUseCase.execute(userId);

    res.status(200).json(result);
  }
}