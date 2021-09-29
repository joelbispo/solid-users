import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const existentUser = this.usersRepository.findById(user_id);
    
    if ( !existentUser ) {
      
      throw new Error("There is no user with this Id");

    }

    if ( existentUser.admin == false ) {
      
      throw new Error("The user is not an admin");
    }
   
    const all_users = this.usersRepository.list();

    return all_users;
  }
}

export { ListAllUsersUseCase };
