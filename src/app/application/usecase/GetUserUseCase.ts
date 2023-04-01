import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import * as TE from "fp-ts/TaskEither";

/**
 * ユーザーを取得するためのユースケース。
 */
export class GetUserUseCase {
  /**
   * コンストラクタ。
   *
   * @param userRepository ユーザーリポジトリ。
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * 指定されたユーザーIDに該当するユーザーを取得する。
   *
   * @param userId ユーザーID。
   * @returns ユーザー。
   */
  execute(userId: string): TE.TaskEither<Error, User> {
    return this.userRepository.findById(userId);
  }
}
