/**
 * ユーザーを表すエンティティ。
 */
export class User {
    /**
     * ユーザーID。
     */
    readonly id: string;
  
    /**
     * ユーザー名。
     */
    readonly name: string;
  
    /**
     * メールアドレス。
     */
    readonly email: string;
  
    /**
     * コンストラクタ。
     *
     * @param id ユーザーID。
     * @param name ユーザー名。
     * @param email メールアドレス。
     */
    constructor(id: string, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }