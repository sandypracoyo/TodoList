'use strict';
module.exports = (sequelize, DataTypes) => {
	const task = sequelize.define(
		'task',
		{
			nama_task: DataTypes.STRING,
			done: DataTypes.BOOLEAN
		},
		{}
	);
	task.associate = function(models) {
		// associations can be defined here
	};
	return task;
};
