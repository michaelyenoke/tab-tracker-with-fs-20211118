// database red mysql port 3306; node server port 8081 -> API

module.exports = {
    port: 3306,
    db: {
        database:  'test01',
        user: 'michaelyenoke',
        password:  '1qaz2wsx3edc',
        options: {
            dialect:  'mysql',
            host:  'database-1.cqwpdgcki6p6.ap-southeast-1.rds.amazonaws.com',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    }
}