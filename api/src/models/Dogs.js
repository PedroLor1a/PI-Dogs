const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dogs",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      yearsLifeMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      yearsLifeMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idTemp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
