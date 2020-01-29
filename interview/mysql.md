---
pageClass: mysql
---
# MySql
[[toc]]

## Queries
### How can you change the name of any existing table by using the SQL statement?
::: warning Answer
The following SQL command is used to rename an existing table of the database.
```sql
RENAME TABLE table_name TO new_name
```
:::

### How can you add and remove any column of a table?
::: warning Answer
The syntax for adding any column in an existing table is shown below.

```sql
ALTER TABLE table_name ADD COLUMN column_name column_definition [FIRST|AFTER existing_column]
```
:::

### How can you retrieve a portion of any column value by using a select query?
::: warning Answer
SUBSTR() function is used to retrieve the portion of any column. The use of this function is explained here with an example.
```sql
SELECT SUBSTR(name,1,5) FROM products;
```
:::

### Consider the following database table design:
```sql
CREATE TABLE `notifications` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`type` INT(8) NOT NULL,
	`notifiable_id` INT unsigned NOT NULL,
	`notifiable_type` VARCHAR(10) NOT NULL,
	`relation_id_1` INT unsigned,
	`relation_type_1` VARCHAR(10),
	`relation_id_2` INT unsigned,
	`relation_type_2` VARCHAR(10),
	`updated_at` TIMESTAMP NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);
```
What is wrong with the above and how could it be improved?
::: warning Answer
The key issue with the proposed table design are the object_id_X and object_type_X fields. It is considered poor design to increment named fields when the data could be stored in a related table like so:

Notifications Table
```sql
CREATE TABLE `notifications` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`type` INT(8) NOT NULL,
	`notifiable_id` INT unsigned NOT NULL,
	`notifiable_type` VARCHAR(10) NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);
```
Notification Relations Table
```sql
CREATE TABLE `notification_relations` (
	`notification_id` INT unsigned NOT NULL,
	`relation_id` INT unsigned NOT NULL,
	`relation_type` VARCHAR(10) NOT NULL,
	PRIMARY KEY (`notification_id`)
);
```
:::

### Consider the following two tables:
```sql
CREATE TABLE `posts` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`text` TEXT,
	`user_id` INT unsigned NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `post_likes` (
	`post_id` INT unsigned NOT NULL,
	`user_id` INT unsigned NOT NULL,
	`created_at` TIMESTAMP NOT NULL
);
```
Write a query to retrieve all data from the posts table for a given user_id. In addition to this, the returned recordset should also include a count of post_likes for each post.
::: warning Answer
Firstly, and most importantly, the answer should include one, and only one, query. There are numerous ways to achieve the expected result, but the correct way is the following:
```sql
SELECT
   posts.*,
   COUNT(post_likes.user_id) AS likes 
FROM
   posts 
   LEFT JOIN
      post_likes 
      ON posts.id = post_likes.post_id
WHERE posts.user_id = 'XXX'
GROUP BY posts.id
```
:::

## About
### What is MySQL?
::: warning Answer
MySQL is an open source DBMS which is built, supported and distributed by MySQL AB (now acquired by Oracle)
:::

### What are the features of MySQL?
::: warning Answer
MySQL has several useful features that make it a popular database management software.

Some important features of MySQL are mentioned below.

- It is reliable and easy to use too.
- It is a suitable database software for both large and small applications.
- Anyone can install and use it at no cost.
- It is supported by many well-known programming languages, such as PHP, Java, C++, PERL, etc.
- It supports standard SQL (Structured Query Language).
- The open-source license of MySQL is customizable. Hence, a developer can modify it according to the requirements of the application.
:::

### What are the technical features of MySQL?
::: warning Answer
MySQL database software is a client or server system which includes

- Multithreaded SQL server supporting various client programs and libraries
- Different backend
- Wide range of application programming interfaces and
- Administrative tools.
:::

### Why MySQL is used?
::: warning Answer
MySQL database server is reliable, fast and very easy to use.  This software can be downloaded as freeware and can be downloaded from the internet.
:::

### What are Heap tables?
::: warning Answer
The table which uses a hashed index and stores in the memory is called the HEAP table. It works as a temporary table and it uses the indexes that make it faster than another table type.

When MySQL crashes for any reason then all the data stored in this table can be lost. It uses fixed-length data types. Hence BLOB and TEXT data types are not supported by this table. It is a useful table for those MySQL tasks where speed is the most important factor and temporary data is used.

HEAP tables are present in memory and they are used for high speed storage on temporary basis.

- BLOB or TEXT fields are not allowed
- Only comparison operators can be used =, <,>, = >,=<
- AUTO_INCREMENT is not supported by HEAP tables
- Indexes should be NOT NULL
:::

### What is the default port for MySQL Server?
::: warning Answer
The default port for MySQL server is 3306.
:::

### What are the advantages and disadvantages of using MySQL?
::: warning Answer 
Answer:

There are several advantages of MySQL which are making it a more popular database system now.

Some significant advantages and disadvantages of MySQL are mentioned below.

Advantages:

- It is well-known for its reliable and secure database management system. Transactional tasks of the website can be done more securely by using this software.
- It supports different types of storage engines to store the data and it works faster for this feature.
- It can handle millions of queries with a high-speed transactional process.
- It supports many advanced level database features, such as multi-level transactions, data integrity, deadlock identification, etc.
- Maintenance and debugging processes are easier for this software.

Disadvantages:

- It is hard to make MySQL scalable.
- It is not suitable for a very large type of database.
- The uses of stored routines and triggers are limited to MySQL.
:::

### What are the advantages of MySQL when compared with Oracle? 
::: warning Answer
- MySQL is open source software which is available at any time and has no cost involved.
- MySQL is portable
- GUI with command prompt.
- Administration is supported using MySQL Query Browser
:::

### Differentiate between FLOAT and DOUBLE? 
::: warning Answer
Following are differences for FLOAT and DOUBLE:
- Floating point numbers are stored in FLOAT with eight place accuracy and it has four bytes.
- Floating point numbers are stored in DOUBLE with accuracy of 18 places and it has eight bytes.
:::

### Differentiate CHAR_LENGTH and LENGTH?
::: warning Answer
CHAR_LENGTH  is character count whereas the LENGTH is byte count. The numbers are same for Latin characters but they are different for Unicode and other encodings.
:::

### How to represent ENUMs and SETs internally? 
::: warning Answer
ENUMs and SETs are used to represent powers of two because of storage optimizations.
:::

### What are the differences between CHAR and VARCHAR data types?
::: warning Answer
Both CHAR and VARCHAR data types are used to store string data in the field of the table.

The differences between these data types are mentioned below:

- CHAR data type is used to store fixed-length string data and the VARCHAR data type is used to store variable-length string data.
- The storage size of the CHAR data type will always be the maximum length of this data type and the storage size of VARCHAR will be the length of the inserted string data. Hence, it is better to use the CHAR data type when the length of the string will be the same length for all the records.
- CHAR is used to store small data whereas VARCHAR is used to store large data.
- CHAR works faster and VARCHAR works slower.
:::

### What is the usage of ENUMs in MySQL?
::: warning Answer
ENUM is a string object used to specify set of predefined values and that can be used during table creation.
```sql
Create table size(name ENUM('Small', 'Medium','Large');
```
:::

### Define REGEXP? 
::: warning Answer
REGEXP is a pattern match in which  matches pattern anywhere in the search value.
:::

### Difference between CHAR and VARCHAR? 
::: warning Answer
Following are the differences between CHAR and VARCHAR:

- CHAR and VARCHAR types differ in storage and retrieval
- CHAR column length is fixed to the length that is declared while creating table. The length value ranges from 1 and 255
- When CHAR values are stored then they are right padded using spaces to specific length. Trailing spaces are removed when CHAR values are retrieved.
:::

### Give string types available for column?
::: warning Answer
The string types are:

- SET
- BLOB
- ENUM
- CHAR
- TEXT
- VARCHAR
:::

### How to get current MySQL version?
::: warning Answer
```sql
SELECT VERSION ();
```

```sql
SHOW VARIABLES LIKE “%version%”;
```
is used to get the current version of MySQL.
:::

### What storage engines are used in MySQL?
::: warning Answer
Storage engines are called table types and data is stored in files using various techniques.

Technique involves:

- Storage mechanism
- Locking levels
- Indexing
- Capabilities and functions.
:::

### What are the drivers in MySQL?
::: warning Answer
Following are the drivers available in MySQL:

- PHP Driver
- JDBC Driver
- ODBC Driver
- C WRAPPER
- PYTHON Driver
- PERL Driver
- RUBY Driver
- CAP11PHP Driver
- Ado.net5.mxj
:::

### How can you filter the duplicate data while retrieving records from the table?
::: warning Answer
A DISTINCT keyword is used to filter the duplicate data from the table while retrieving the records from a table.
:::

### What is the purpose of using the TIMESTAMP data type?
::: warning Answer
A TIMESTAMP data type is used to store the combination of date and time value which is 19 characters long.

The format of TIMESTAMP is YYYY-MM-DD HH:MM: SS. It can store data from ‘1970-01-01 00:00:01’ UTC to ‘2038-01-19 03:14:07’ UTC. By default, the current date and time of the server get inserted in the field of this data type when a new record is inserted or updated.
:::

### What does a TIMESTAMP do on UPDATE CURRENT_TIMESTAMP data type?
::: warning Answer
TIMESTAMP column is updated with Zero when the table is created.  UPDATE CURRENT_TIMESTAMP modifier updates the timestamp field to  current time whenever there is a change in other fields of the table.
:::

### What is the difference between the Primary key and the Unique key?
::: warning Answer
Unique data is stored in the primary key and unique key fields. The primary key field never accepts NULL value but a unique key field accepts a NULL value.
:::

### What are the differences between a primary key and a foreign key?
::: warning Answer
The database table uses a primary key to identify each row uniquely. It is necessary to declare the primary key on those tables that require to create a relationship among them. One or more fields of a table can be declared as the primary key.

When the primary key of any table is used in another table as the primary key or another field for making a database relation, then it is called a foreign key.

The differences between these two keys are mentioned below.

- The primary key uniquely identifies a record, whereas foreign key refers to the primary key of another table.
- The primary key can never accept a NULL value but foreign key accepts a NULL value.
- When a record is inserted in a table that contains the primary key then it is not necessary to insert the value on the table that contains this primary key field as the foreign key.
- When a record is deleted from the table that contains the primary key then the corresponding record must be deleted from the table containing the foreign key for data consistency. But any record can be deleted from the table that contains a foreign key without deleting a related record of another table.
:::

### What is the difference between primary key and candidate key?
::: warning Answer
Every row of a table is identified uniquely by primary key. There is only one primary key for a table.

Primary Key is also a candidate key. By common convention, candidate key can be designated as primary and which can be used for any foreign key references.
:::

### How do you login to MySql using Unix shell?
We can login through this command:
::: warning Answer
```bash
[mysql dir]/bin/mysql -h hostname -u <UserName> -p <password>
```
:::

### What is the function of myisamchk?
::: warning Answer 
myisamchk is a useful database utility tool that is used to get information about MyISAM database tables.

It is also used for checking, debugging, repairing and optimizing database tables. It is better to use this command when the server is down or when the required tables are not in use by the server.

Syntax:

myisamchk [OPTION] table_name…

The available options of this tool can be retrieved by using the following command.

myisamchk –help

To check or repair all MyISAM tables, the following command will be required for executing from the database directory location.

myisamchk *.MYI
:::

### What does myisamchk do?
::: warning Answer
It compress the MyISAM tables, which reduces their disk or memory usage.
:::

### How do you control the max size of a HEAP table?
::: warning Answer
Maximum size of Heap table can be controlled by MySQL config variable called max_heap_table_size.
:::

### What is the difference between MyISAM Static and MyISAM Dynamic?
::: warning Answer
In MyISAM static all the fields will have fixed width. The Dynamic MyISAM table will have fields like TEXT, BLOB, etc. to accommodate the data types with various lengths.

MyISAM Static would be easier to restore in case of corruption.
:::

###  What are federated tables?
::: warning Answer
Federated tables which allow access to the tables located on other databases on other servers.
:::

### What, if a table has one column defined as TIMESTAMP?
::: warning Answer
Timestamp field gets the current timestamp whenever the row gets altered.
:::

### What happens when the column is set to AUTO INCREMENT and if you reach maximum value in the table?
::: warning Answer
It stops incrementing. Any further inserts are going to produce an error, since the key has been used already.
:::

### How can we find out which auto increment was assigned on Last insert?
::: warning Answer
LAST_INSERT_ID will return the last value assigned by Auto_increment and it is not required to specify the table name.
:::

### What is an index? How can an index be declared in MySQL?
::: warning Answer
An index is a data structure of a MySQL table that is used to speed up the queries.

It is used by the database search engine to find out the records faster. One or more fields of a table can be used as an index key. Index key can be assigned at the time of table declaration or can be assigned after creating the table.
:::

### How can you see all indexes defined for a table?
::: warning Answer
Indexes are defined for the table by:
```sql
SHOW INDEX FROM <tablename>;
SHOW INDEXES FROM users;
```
:::

### What do you mean by % and _ in the LIKE statement?
::: warning Answer
% corresponds to 0 or more characters, _ is exactly one character in the LIKE statement.
:::

### What is the difference between UNIX TIMESTAMP and MySQL TIMESTAMP?
::: warning Answer
Both UNIX TIMESTAMP and MySQL TIMESTAMP are used to represent the date and time value. The main difference between these values is that UNIX TIMESTAMP represents the value by using 32-bits integers and MySQL TIMESTAMP represents the value in the human-readable format.

A UNIX time value is used by FROM_UNIXTIME function in the SELECT query to get the date and time value in the human-readable format.
```sql
SELECT FROM_UNIXTIME (1596222320) AS ‘MySQLTIMESTAMP';
```

Date and time value is used by UNIX_TIMESTAMP function in the SELECT query to get the date and time value in the UNIX format.

```sql
SELECT UNIX_TIMESTAMP (‘2018-12-25 09:45:40') AS ‘UNIXTIMESTAMP';
```
:::

### How can we convert between Unix & MySQL timestamps?
::: warning Answer
UNIX_TIMESTAMP is the command which converts from MySQL timestamp to Unix timestamp

FROM_UNIXTIME is the command which converts from Unix timestamp to MySQL timestamp.
:::

### What are the column comparisons operators?
::: warning Answer
The = , <>, <=, <, >=, >,<<,>>, <=>, AND, OR, or LIKE operators are used in column comparisons in SELECT statements.
:::

### How can you count the total number of records of any table?
::: warning Answer
COUNT() function is used to count the total number of records of any table.
```sql
SELECT COUNT(*) as `Total Records` FROM products;
```
:::

### How can we get the number of rows affected by query?
::: warning Answer
Number of rows can be obtained by
```sql
SELECT COUNT (user_id) FROM users;
```
:::

### Is Mysql query is case sensitive?
::: warning Answer
No.
```sql
SELECT VERSION(), CURRENT_DATE;
SeLect version(), current_date;
seleCt vErSiOn(), current_DATE;
```
All these examples are same. It is not case sensitive.
:::

### What is the difference between the LIKE and REGEXP operators?  
::: warning Answer
LIKE and REGEXP operators are used to express with ^ and %.
```sql
SELECT * FROM employee WHERE emp_name REGEXP "^b";
SELECT * FROM employee WHERE emp_name LIKE "%b";
```
:::

### What is the difference between NOW() and CURRENT_DATE()?
 ::: warning Answer
Both NOW() and CURRENT_DATE() are built-in MySQL methods. NOW() is used to show the current date and time of the server and CURRENT_DATE() is used to show only the date of the server.
:::

### What is the difference between BLOB AND TEXT?
::: warning Answer
A BLOB is a binary large object that can hold a variable amount of data. There are four types of BLOB –

- TINYBLOB
- BLOB
- MEDIUMBLOB and
- LONGBLOB
They all differ only in the maximum length of the values they can hold.

A TEXT is a case-insensitive BLOB. The four TEXT types

- TINYTEXT
- TEXT
- MEDIUMTEXT and
- LONGTEXT
They all correspond to the four BLOB types and have the same maximum lengths and storage requirements.

The only difference between BLOB and TEXT types is that sorting and comparison is performed in case-sensitive for BLOB values and case-insensitive for TEXT values.
:::

### What is the difference between mysql_fetch_array and mysql_fetch_object?
::: warning Answer
Following are the differences between mysql_fetch_array and mysql_fetch_object:

`mysql_fetch_array()` -Returns a result row as an associated array or a regular array from database.

`mysql_fetch_object` –  Returns a result row as object from database.
:::

### How can we run batch mode in mysql?
::: warning Answer
Following commands are used to run in batch mode:

```sql
mysql ;
mysql mysql.out
```
:::

### Where MyISAM table will be stored and also give their formats of storage?
::: warning Answer
Each MyISAM table is stored on disk in three formats:

- The ‘.frm’ file stores the table definition
- The data file has a ‘.MYD’ (MYData) extension
- The index file has a ‘.MYI’ (MYIndex) extension
:::

### What are the different tables present in MySQL?
::: warning Answer
Total 5 types of tables are present:

- MyISAM
- Heap
- Merge
- INNO DB
- ISAM
MyISAM is the default storage engine as of MySQL.
:::

### What is ISAM?
::: warning Answer
ISAM  is abbreviated as Indexed Sequential Access Method.It was developed by IBM to store and retrieve data on secondary storage systems like tapes.
:::

### What is InnoDB?
::: warning Answer
lnnoDB is a transaction safe storage engine developed by Innobase Oy which is a Oracle Corporation now.
:::

### Which MySQL function is used to concatenate string?
::: warning Answer 
CONCAT() function is used to combine two or more string data. The use of this function is here with an example.
```sql
SELECT CONCAT(brand, '=>', type) from items;
```
:::

### What is meant by a decimal (5,2)?
::: warning Answer 
A decimal data type is used in MySQL to store the fractional data.

The meaning of decimal (5,2) means that the total length of the fractional value is 5. The field can contain 3 digits before the decimal point and 2 digits after the decimal point. If a user adds any value larger than the defined length then it will insert 999.99 in the field.

The use of this data type is explained in the following example.
:::

### What is view? How can you create and drop view in MySQL?
::: warning Answer 
A view works as a virtual table that is used to store query and returns a result set when it is called. An updatable view is also supported by MySQL.

How a view can be created or deleted in MySQL are shown in the following examples.
The following statement will create a view file named ‘client_list’ based on the table clients.
```sql
CREATE VIEW `client_list` AS SELECT `name` as ‘Name', `membership` as ‘Membership' FROM `clients`;
```

Select statement will display the records of client_list value.
```sql
SELECT * FROM client_list;
```
The drop view statement will delete the view file. The select query will show an error after deleting the view.
```sql
DROP VIEW client_list;
```
:::

### What is the function of mysqldump?
::: warning Answer
mysqldump is a useful utility tool of MySQL that is used to dump one or more or all databases from the server for backup or transfer to another database server.
:::

### How can you change the password of a MySQL user?
::: warning Answer
SET PASSWORD statement is used to change the password of a MySQL user.

```sql
SET PASSWORD FOR ‘username'@'hostname' = PASSWORD(‘password');
```
:::

### How can you import tables from a SQL file into a database by using the MySQL client?
::: warning Answer
Database tables can be imported into a database from a SQL file by using the following MySQL statement.
```sql
mysql -u username -p database_name < sql_filename
```
:::

### How can you export the table as an XML file in MySQL?
::: warning Answer
‘-X’ option is used with `mysql` command for exporting the file as XML. The following statement will export any table from a database as an XML file.

mysql -u username -X -e “SELECT query” database_name
mysql -u root -X -e “SELECT * from products” newdb > xmlData.xml
:::

### What is a join? Explain the different types of MySQL joins.
::: warning Answer
The SQL statement that is used to make a connection between two or more tables based on the matching columns is called a join. It is mainly used for complex queries.

Different types of SQL joins are mentioned below:

- Inner Join: It is a default join. It returns records when the values match in the joining tables.
- Left Outer Join: It returns all the records from the left table based on the matched records from the right table.
- Right Outer Join: It returns all the records from the right table based on the matched records from the left table.
- Full Outer Join: It returns all the records that match from the left or right table.
:::

### How can you retrieve a particular number of records from a table?
::: warning Answer
`LIMIT` clause is used with the SQL statement to retrieve a particular number of records from a table. From which record and how many records will be retrieved are defined by the `LIMIT` clause.
```sql
LIMIT starting_number, number_of_rows
SELECT * FROM products LIMIT 1, 2;
```
:::

### What is a CSV table?
::: warning Answer
MySQL table that uses the CSV storage engine is called a CSV table. Data are stored as comma-separated values in the CSV table. MySQL server creates a data file with an extension ‘.csv’ to store the content of the CSV table.

Example:

The following create statement will create a CSV file named book.
```sql
CREATE TABLE book ( id INT NOT NULL) ENGINE=CSV;
```
:::

### How can you calculate the sum of any column of a table?
::: warning Answer
SUM() function is used to calculate the sum of any column.
```sql
SELECT * FROM products;
SELECT SUM(price) as total FROM products;
```
:::

### Explain the difference between delete and truncate.
::: warning Answer
Both DELETE and TRUNCATE commands are used to delete the records from any database table. However, there are some significant differences between these commands. If the table contains the AUTO_INCREMENT PRIMARY KEY field then the effect of these commands can be shown properly.

Two differences between these commands are mentioned below.

1. DELETE command is used to delete a single or multiple or all the records from the table. The TRUNCATE command is used to delete all the records from the table or make the table empty.

2. When DELETE command is used to delete all the records from the table then it doesn’t re-initialize the table. So, the AUTO_INCREMENT field does not count from one when the user inserts any record.

But when all the records of any table are deleted by using TRUNCATE command then it re-initializes the table and a new record will start from one for the AUTO_INCREMENT field.
```sql
DELETE FROM users;
TRUNCATE table users;
```
:::

### What is a transaction? Describe MySQL transaction properties.
::: warning Answer
When a group of database operations is done as a single unit then it is called a transaction. If any task of the transactional tasks remains incomplete then the transaction will not succeed. Hence, it is mandatory to complete all the tasks of a transaction to make the transaction successful.

A transaction has four properties which are known as ACID property. These properties are described below.

- Atomicity: It ensures that all the tasks of a transaction will be completed successfully otherwise all the completed tasks will be rolled back to the previous state for any failure.
- Consistency: It ensures that the database state must be changed accurately for the committed transaction.
- Isolation: It ensures that all the tasks of a transaction will be done independently and transparently.
- Durability: It ensures that all the committed transaction is consistent for any type of system failure.
:::

### What are the functions of commit and rollback statements?
::: warning Answer
Commit is a transaction command that executes when all the tasks of a transaction are completed successfully. It will modify the database permanently to confirm the transaction.

Rollback is another transactional command that executes when any of the transactional tasks become unsuccessful and undoes all the changes that are made by any transactional task to make the transaction unsuccessful.

```sql
COMMIT;
ROLLBACK;
```
:::

### What is a trigger? How you can create a trigger in MySQL?
::: warning Answer
One of the important features of the MySQL database is a trigger that executes automatically when a particular database event occurs.

It fires after or before the execution of an insert or update or deletes a statement. It is a very useful option when a database user wants to do some database operations automatically.

This is an example of after delete trigger that will fire automatically when any record is removed from the manufacturer table and deletes all the records from the products table where the deleted id of the manufacturer table matches with the manufacturer_id field of the products table.
```sql
DELIMITER //
CREATE TRIGGER manufacturer_after_delete
AFTER DELETE
ON manufacturers FOR EACH ROW
BEGIN
DELETE FROM products WHERE products.manufacturers_id = OLD.id;
END;
//
```
:::
