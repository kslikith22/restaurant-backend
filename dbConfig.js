export const dbCon = {
    HOST : "sql12.freesqldatabase.com",
    USER:"sql12659428",
    PASSWORD:'XSveMedQQ9',
    DB:'sql12659428',
    dialect:'mysql',
    pool:{
        max:5, //! max min connections
        min:0,
        acquire:30000,
        idle:10000
    }
}