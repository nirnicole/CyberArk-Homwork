USE sql_intro;
-- lets VS code know which DB to use
-- CREATE TABLE Deity(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     mythology VARCHAR(20),
--     main_power VARCHAR(50),
--     coolness INT,
--     creation_date INT
-- )
INSERT INTO Deity(name, coolness)
VALUES("Zeus", 11) -- Or if you’re inserting all the values in the order of the columns, you can just do:
    -- INSERT INTO Deity 
    -- VALUES(null, "Zeus", "Greek", "Thunder", 11, "-1400")
    -- A few notes on the above:
    -- You must insert the first null as a placeholder for the id column
    -- Negative numbers must be wrapped in quotes - though they’re still stored as numbers