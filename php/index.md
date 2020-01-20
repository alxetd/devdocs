# Php
## Filters
::: tip Read More
- [www.w3schools.com/php/php_filter.asp](https://www.w3schools.com/php/php_filter.asp)
:::

Validating data = Determine if the data is in proper form.

Sanitizing data = Remove any illegal character from the data.

```bash
Php	php-config	php	
Php	php-config --extension-dir	php	
	php -v	php	
	php -S localhost:4000		
	php -S localhost:8000 -c app/config/php.ini		
			
xDebug	"Check XDebug on machine:
php -i |grep xdebug"		
xDebug	"VirtualHost settings:
php_value xdebug.remote_connect_back 1
php_value xdebug.remote_enable 1
php_value xdebug.var_display_max_depth 8
php_value xdebug.autostart 1"		
xDebug	"Command line debug:
export XDEBUG_CONFIG=""idekey=ET5_MKTP_RO remote_host=${SSH_CLIENT%% *} remote_enable=1""
php /home/eduard.trandafir/et5/et5.mktp-ro/htdocs/../app/console rabbitmq:consumer -w mktp.qevent.low

export XDEBUG_CONFIG=""idekey=SB1_MKTP40 remote_host=${SSH_CLIENT%% *} remote_enable=1""
mktp40: php /home/stefan.boila/sb1/sb1.mktp-ro/release-45b19b1783518578bcf266c9fabb905e088b0e03_20150514115524/src/Mktp/QEventBundle/Command/../../../../app/console rabbitmq:consumer -w mktp.qevent.low"		
xDebug	php /home/eduard.trandafir/et5/et5.mktp-ro/htdocs/../app/console rabbitmq:consumer -w mktp.qevent.low -m 1		
Gearman	sudo systemctl restart gearmand.service		
Gearman	systemctl status gearmand		
```
