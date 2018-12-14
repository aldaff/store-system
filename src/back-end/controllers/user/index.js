const { User } = require('../../models');

exports.importFromBackupFile = async (data) => {
  try {
    return await Promise.all(data.map(async user => User.create(user)));
  } catch (err) {
    return err;
  }
};

exports.create = async (args) => {
  try {
    const user = await User.create(args);

    return user.id;
  } catch (err) {
    return err;
  }
};

exports.getAll = async () => {
  try {
    return await User.findAll({ raw: true, order: [['updatedAt', 'DESC']] });
  } catch (err) {
    return err;
  }
};

exports.edit = async (userUpdated) => {
  try {
    return await User.update({
      ...userUpdated,
    }, {
      where: {
        id: userUpdated.id,
      },
    });
  } catch (err) {
    return err;
  }
};

exports.remove = async (id) => {
  try {
    return await User.destroy({ where: { id } });
  } catch (err) {
    return err;
  }
};
