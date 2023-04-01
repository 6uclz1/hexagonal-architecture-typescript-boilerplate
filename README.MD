```
myapp/
  ├── src/
  │   ├── adapters/
  │   │   ├── inbound/
  │   │   │   ├── controllers/
  │   │   │   │   ├── UserController.ts
  │   │   │   │   └── index.ts
  │   │   │   ├── gateways/
  │   │   │   │   └── UserRepository.ts
  │   │   │   ├── presenters/
  │   │   │   │   └── UserPresenter.ts
  │   │   │   └── index.ts
  │   │   └── outbound/
  │   │       ├── repositories/
  │   │       │   └── UserRepositoryImpl.ts
  │   │       └── services/
  │   │           └── UserService.ts
  │   ├── application/
  │   │   ├── usecases/
  │   │   │   ├── CreateUserUseCase.ts
  │   │   │   ├── GetUserUseCase.ts
  │   │   │   └── index.ts
  │   │   └── services/
  │   │       └── UserService.ts
  │   ├── domain/
  │   │   ├── entities/
  │   │   │   └── User.ts
  │   │   ├── repositories/
  │   │   │   └── UserRepository.ts
  │   │   └── services/
  │   │       └── UserService.ts
  │   ├── infrastructure/
  │   │   ├── config/
  │   │   │   └── database.ts
  │   │   ├── data/
  │   │   │   └── users.json
  │   │   └── persistence/
  │   │       ├── UserRepositoryImpl.ts
  │   │       └── index.ts
  │   ├── index.ts
  │   └── server.ts
  ├── tsconfig.json
  └── package.json
```