import * as userRepositories from '../../src/repository/user.repository';
import  * as userService from '../../src/service/user.service';



jest.mock('../../src/repository/user.repository');

describe('User Service Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

})