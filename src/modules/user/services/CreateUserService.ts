import type { CreateUserDTO } from "../dto/CreateUserDTO.js";

import { User } from "../domain/entities/User.js";

export class CreateUserService {
  async execute(dto: CreateUserDTO) {
    const user = new User(dto.name, dto.age);

    if (!user.isAdult()) {
      throw new Error("Usuário menor de idade");
    }
  }
}
