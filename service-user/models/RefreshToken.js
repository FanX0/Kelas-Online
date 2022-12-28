module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false,
        },
        token : {
            type : DataTypes,
            allowNull :false,
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        createAt: {
            type:DataTypes.Date,
            field : 'created_at',
            allowNull: false
        },
        updatedAt: {
            type:DataTypes.Date,
            field : 'created_at',
            allowNull: false
        },
    },{
        tableName: 'refresh_tokens',
        timestamps : true
    });
    
    return RefreshToken;
}