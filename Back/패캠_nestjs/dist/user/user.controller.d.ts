import { UserService } from './user.service';
import { FindUserResDto } from './dto/res.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { FindUserReqDto } from './dto/req.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll({ page, size }: PageReqDto): Promise<{
        items: FindUserResDto[];
    }>;
    findOne({ id }: FindUserReqDto): Promise<FindUserResDto>;
}
