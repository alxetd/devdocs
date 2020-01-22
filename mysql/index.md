# MySql

## Official Resources
- [https://www.mysql.com](https://www.mysql.com)

## Resources

## Useful commands

```sql
mysqldump -u username -p database_name > data-dump.sql
```

```sql
mysql -u username -p new_database < data-dump.sql
```

## Articles
- [www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb](https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb)


```bash
mysql -u username -p	Mysql cli login.	
CREATE DATABASE my_database CHARACTER SET utf8 COLLATE utf8_general_ci;	Create database.	
CREATE USER username@localhost IDENTIFIED BY 'password';	Create user.	
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES ON databasename.* TO 'username'@'localhost' IDENTIFIED BY 'password';		
		
SELECT User, Host, Password FROM mysql.user;		
uninstall plugin validate_password;		
mysqldump --databases alxetd --user=drupaluser --password > alxetd.sql		
mysqladmin -u root -p create mytestdatabase		
mysql -u root -p mytestdatabase < drupaldb-20090505.sql		
mysql alxetd --user=drupaluser --password < database.sql		
SET FOREIGN_KEY_CHECKS=0;		
mysqldump --compatible=ansi --all-databases	Export mariadb dump to mysql	mariadb, dump, export, import
GRANT ALTER,CREATE,CREATE VIEW, DELETE,DROP,INDEX,INSERT,REFERENCES,SELECT,SHOW VIEW,TRIGGER,UPDATE,ALTER ROUTINE,CREATE ROUTINE,EXECUTE,CREATE TEMPORARY TABLES,LOCK TABLES ON drupal8_nema.* to drupal8_nema@localhost;		
```


### Mamp
```bash
/Applications/MAMP/Library/bin/mysqldump -u alxetd -p alxetd_lightning > ./backup/database.sql	Export database	export
/Applications/MAMP/Library/bin/apachectl -S
tail -f /Applications/MAMP/logs/*
vim /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
vim /Applications/MAMP/conf/apache/httpd.conf
/Applications/MAMP/Library/bin/mysql
export PATH=$PATH:/Applications/MAMP/Library/bin/
```
