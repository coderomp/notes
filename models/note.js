module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("note", {
        note: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Note.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Note.belongsTo(models.note_type, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Note;
};