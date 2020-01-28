---
pageClass: mysql
---
# MySql
## Queries
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

### What does a TIMESTAMP do on UPDATE CURRENT_TIMESTAMP data type?
::: warning Answer
TIMESTAMP column is updated with Zero when the table is created.  UPDATE CURRENT_TIMESTAMP modifier updates the timestamp field to  current time whenever there is a change in other fields of the table.
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

### How can you see all indexes defined for a table?
::: warning Answer
Indexes are defined for the table by:
```sql
SHOW INDEX FROM <tablename>;
```
:::

### What do you mean by % and _ in the LIKE statement?
::: warning Answer
% corresponds to 0 or more characters, _ is exactly one character in the LIKE statement.
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
