import { Connection } from "typeorm";
import * as TE from 'fp-ts/TaskEither';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from "./entities/User";
import { DatabaseConfig } from "../../infrastructure/config/database";

export class UserRepositoryForDB implements UserRepository {
  private connection: Connection;

  constructor(database: DatabaseConfig) {
    this.connection = database.connect();
  }

  findById(id: string): TE.TaskEither<Error, User> {
    return TE.tryCatch(
      () => this.connection.findOneOrFail(id),
      (reason) => new Error(`Failed to find user with id ${id}: ${reason}`)
    );
  }

  save(user: User): TE.TaskEither<Error, User> {
    return TE.tryCatch(
      () => this.connection.save(user),
      (reason) => new Error(`Failed to save user: ${reason}`)
    );
  }
}