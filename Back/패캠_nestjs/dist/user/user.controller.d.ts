import { PageReqDto } from 'src/common/dto/req.dto';
import { FindUserReqDto } from './dto/req.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll({ page, size }: PageReqDto): Promise<string>;
    findOne({ id }: FindUserReqDto): Promise<string>;
}
