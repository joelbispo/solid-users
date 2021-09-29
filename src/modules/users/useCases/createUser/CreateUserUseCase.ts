import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailAlreadyTaken) {
      throw new Error("This Email was already taken by other user");
    }
    
    const new_user = this.usersRepository.create({
      email,
      name
    });
    
    return new_user;
  }
}

export { CreateUserUseCase };
