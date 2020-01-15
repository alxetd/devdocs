---
pageClass: mysql
---
# MySql
## Table design
Consider the following database table design:
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
### Answer
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
