CREATE TABLE Halls(
    id SERIAL PRIMARY KEY,      
    name VARCHAR(256) NOT NULL,
    address VARCHAR(256) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,      
    userName VARCHAR(256) NOT NULL,
    hashedPassword VARCHAR(1024) NOT NULL,
    firstName VARCHAR(256) NOT NULL,
    lastName VARCHAR(256) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

--CREATE TYPE reservationStatus AS ENUM ('pending', 'approved', 'denied');

CREATE TABLE Reservations(
    id SERIAL PRIMARY KEY,
    userFK INT REFERENCES Users(ID) NOT NULL,
    hallFK INT REFERENCES Halls(ID) NOT NULL,
    reservationStatus INT NOT NULL,
    reservedFrom TIMESTAMP NOT NULL,
    reservedUntil TIMESTAMP NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE Admins(
    userFK INT REFERENCES Users(ID) PRIMARY KEY,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()       
);

CREATE TABLE Sessions(
    id SERIAL PRIMARY KEY,
    adminFK INT REFERENCES Admins(userFK) NOT NULL,
    loginTimeStamp TIMESTAMP NOT NULL,
    logoutTimeStamp TIMESTAMP,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()       
);
