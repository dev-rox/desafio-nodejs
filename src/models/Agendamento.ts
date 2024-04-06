import { DataTypes, Model } from 'sequelize';
import db from '.';

class Agendamento extends Model {
  public id!: number;
  public email!: string;
  public servico!: string;
  public reserva!: Date;
}
Agendamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reserva: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Agendamento',
    tableName: 'agendamentos',
  }
);

export default Agendamento;
