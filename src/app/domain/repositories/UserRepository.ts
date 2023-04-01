import { User } from "../../domain/entities/User";
import * as TE from "fp-ts/TaskEither";

/**
 * ユーザーリポジトリのインターフェース。
 */
export interface UserRepository {
  /**
   * 指定されたIDのユーザーを取得する。
   *
   * @param id ユーザーID。
   * @returns Eitherモナドで返すユーザー。存在しない場合はエラー情報を返す。
   */
  findById(id: string): TE.TaskEither<Error, User>;

  /**
   * ユーザーを保存する。
   *
   * @param user 保存するユーザー。
   * @returns Eitherモナドで返す処理結果。エラーが発生した場合はエラー情報を返す。
   */
  save(user: User): TE.TaskEither<Error, User>;

  // /**
  //  * 指定されたIDのユーザーを削除する。
  //  *
  //  * @param id 削除するユーザーのID。
  //  * @returns Eitherモナドで返す処理結果。エラーが発生した場合はエラー情報を返す。
  //  */
  // deleteById(id: string): Promise<TE.TaskEither<Error, void>>;
}