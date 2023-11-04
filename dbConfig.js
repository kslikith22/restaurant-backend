export const dbCon = {
    HOST : "localhost",
    USER:"root",
    PASSWORD:'',
    DB:'test',
    dialect:'mysql',
    pool:{
        max:5, //! max min connections
        min:0,
        acquire:30000,
        idle:10000
    }
}