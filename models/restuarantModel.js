import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export const Restuarants = sequelize.define("resturants", {
  name: DataTypes.TEXT,
  address: {
    type: DataTypes.TEXT,
  },
  contact: DataTypes.TEXT,
});

(async () => {
  await sequelize.sync({ force: false }).then(()=>{
        console.log("Synced")
  });
  
})();