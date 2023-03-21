DROP TABLE IF EXISTS studentInfo;
CREATE TABLE IF NOT EXISTS studentInfo(
    studentNum INTEGER  NOT NULL PRIMARY KEY
    ,image      LONGBLOB NOT NULL
    ,lastName   VARCHAR(50) NOT NULL
    ,firstName  VARCHAR(100) NOT NULL
    ,email1     VARCHAR(50) NOT NULL
    ,email2     VARCHAR(50)
    ,email3     VARCHAR(50)
    ,tel1       VARCHAR(15) NOT NULL
    ,tel2       VARCHAR(15)
    ,tel3       VARCHAR(15)
    ,birthdate  DATE  NOT NULL
    ,postalAddr VARCHAR(100) NOT NULL
    );