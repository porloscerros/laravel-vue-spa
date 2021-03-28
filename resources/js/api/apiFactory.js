
import usersApi from './apis/usersApi';

const repositories = {
    users: usersApi,
};

export const apiFactory = {
    get: name => repositories[name]
};
