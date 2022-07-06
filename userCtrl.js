const User = require('./userSchema.js');
const mongoose = require('mongoose');

class UserCtrl {
    static async getUsersController(req, res) {
        const users = await User.find();

        return res.send({
            data: users,
        })
    }

    static async postUsersController(req, res) {
        const userBody = req.body;
        
        try {
            const saveData = await User.create(userBody)
            return res
            .status(201)
            .send({
                data: saveData,
            });
        } catch(error) {
            res
            .status(400)
            .send({message: 'Invalid data'});
        }
    }

    static async deleteUsersController(req, res) {
        const id = req.body.id;

        try {
            mongoose.Types.ObjectId(id);
        } catch (error) {
            return res
            .status(404)
            .send({message: 'ID is invalid'});
        }
        
        const result = await User.deleteOne({
            _id: mongoose.Types.ObjectId(id),
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
        // const result = await User.updateOne(
        //     {
        //         _id: req.query._id,
        //     },
        //     {
        //         name: req.body.name,
        //         age: req.body.age,
        //         gender: req.body.gender
        //     });

        const id = req.body.id;

        console.log(id);

        try {
            mongoose.Types.ObjectId(id);
        } catch (error) {
            return res
            .status(404)
            .send({message: 'ID is invalid'});
        }

        const result = await User.updateOne(
            {
                _id: mongoose.Types.ObjectId(id),
            },
            {
                name: req.body.name,
                age: req.body.age,
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