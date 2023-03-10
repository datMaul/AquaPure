DROP TYPE IF EXISTS email CASCADE;
CREATE TABLE billing_address (
    phone_no SERIAL,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR NOT NULL UNIQUE,
    address_user VARCHAR NOT NULL,
    postcode VARCHAR,
    PRIMARY KEY (email)
);