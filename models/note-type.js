module.exports = function(sequelize, DataTypes) {
  var NoteType = sequelize.define("note_type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    key_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  return NoteType;
};
