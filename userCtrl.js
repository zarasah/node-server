const User = require('./userSchema.js');

class UserCtrl {
    static async getUsersController(req, res) {
        const users = await User.find();

        return res.send({
            data: users,
        })
    }

    static async postUsersController(req, res) {
        const userBody = req.body;
        
        const saveData = await User.create(userBody)
        return res
        .status(201)
        .send({
            data: saveData
        });
    }

    static async deleteUsersController(req, res) {
        const result = await User.deleteOne({
            _id: req.query._id,
        });

        if(result.deletedCount === 0) {
            return res
            .status(404)
            .send({message: 'user not found'});
        }
    
        return res
        .status(204)
        .send();
    }

    static async putUsersController(req, res) {
        const result = await User.updateOne(
            {
                _id: req.query._id,
            },
            {
                name: req.body.name,
                gender: req.body.gender
            });

        if(result.modifiedUser === 0) {
            return res
            .status(404)
            .send({message: 'User not found'});
        }
    
        return res
        .status(201)
        .send({message: 'Data was modified'});
    }
}

module.exports = {
    UserCtrl,
}