import db from './db';

export const addUser = (req, res) => {
    const newUser = {
        id: db.get('users').size().value()+1,
        ...req.body
    };
    db.get('users').push(newUser).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'User added',
        data: newUser
    });
};

export const getUsers = (req, res) => {
    const { offset = 0, limit = 10, firstname, age, lastname, email } = req.query;
    const users = db.get('users').value()
        .filter(item => {
            let flag = true;
            if (firstname) {
                flag = flag && item.firstname.includes(firstname);
            }
            if (lastname) {
                flag = flag && item.lastname.includes(lastname);
            }
            if (age) {
                flag = flag && (item.age == age);
            }
            if(email) {
                flag = flag && item.email.includes(email);
            }
            return flag;
        })
        .slice(offset, (+offset) + (+limit));
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Users',
        data: users
    });
}

export const updateUser = (req, res) => {
    const {id} = req.body;
    db.get('users').find({id}).update({...req.body}).write();
    const updatedUser = db.get('users').find({id}).value();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'User updated',
        data: updatedUser
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = db.get('users').find({id: +id}).value();
    db.get('users').remove({id: +id}).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'User removed',
        data: user
    })
}
