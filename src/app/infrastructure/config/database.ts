import { createConnection, Connection } from 'typeorm';

/**
 * データベース接続設定を行うクラス。
 */
export class DatabaseConfig {
  /**
   * データベース接続を行う。
   *
   * @returns 接続オブジェクト。
   */
  async connect(): Promise<Connection> {
    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'my_database',
      entities: ['src/domain/entities/*.ts'],
      synchronize: true,
    });
    return connection;
  }
}