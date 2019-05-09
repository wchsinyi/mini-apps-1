DROP DATABASE checkout;
CREATE DATABASE checkout;

USE checkout
CREATE TABLE user(
    userid INT PRIMARY KEY AUTO_INCREMENT,
    name LONGTEXT,
    email char(100),
    passcode char(100)
);


CREATE TABLE address(
    userid INT,
    addressid LONGTEXT,
    line1 LONGTEXT,
    line2 LONGTEXT,
    city LONGTEXT,
    state char(2),
    zipcode INT,
    FOREIGN KEY (userid) REFERENCES user(userid) 
);

CREATE TABLE creditCard(
    userid INT,
    creditcard VARCHAR(20),
    expirationdate INT,
    CVV INT,
    billingzipcode INT,
    FOREIGN KEY (userid) REFERENCES user(userid) 
);

-- mysql -u student < serverDB.sql 


        -- 1: ['name', 'email', 'passcode'],
        -- 2: ['line 1', 'line 2', 'city', 'state', 'zip code'],
        -- 3: ['credit card #', 'expiration date', 'CVV', 'billing zip code']
