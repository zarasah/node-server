let users = require('./users.js');

class UserCtrl {
    static getUsersController(req, res) {
        res.send(users);
    }

    static postUsersController(req, res) {
        let id = users.length;
    
        users.push({
            id: ++id,
            ...req.body,
        });
    }

    static deleteUsersController(req, res) {
        const index = req.query;
    
        users = users.filter((user) => {
            return user.id !== +index.id
        });
    }

    static putUsersController(req, res) {
        const index = req.query.id;

        return users.map((elem) => {
            if (elem.id === +index) {
                elem.name = req.query.name;
            }
        });
    }
}

module.exports = {
    UserCtrl,
}