import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

    const existentUser = this.usersRepository.findById(user_id);

    if (! existentUser )  {
      throw new Error("There is no an user with this ID");

    }
    
    const userAdmin = this.usersRepository.turnAdmin(existentUser);

    return userAdmin;
  
  }
}

export { TurnUserAdminUseCase };
