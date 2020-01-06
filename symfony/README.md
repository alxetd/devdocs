# Symfony
## Commands
```bash
php app/console cache:clear		
php app/console assets:install		
php app/console assetic:dump		
php app/console assetic:dump; php app/console assets:install --symlink		
composer require server --dev	symfony, composer	Add library to project
composer require twig		
composer require debug-pack		
composer unpack debug		Unpack recipe.
composer require annotations		
composer require asset		
composer require orm-pack		
composer require web-skeleton		Get all default packages.
```

## Supervisor
```bash
Supervisor	sudo supervisorctl status	
Supervisor	sudo supervisorctl update	
Supervisor	"about supervisors:
- trebuie sa fie in /etc/supervisor/conf.d un symlink catre floderul meu supervisor-generated, unde am supervisorii care sunt activi."	
Supervisor	sudo supervisorctl stop all && bin/console gearman:cache:clear && rm -rf var/cache/* && sudo supervisorctl status | grep dcv1 | cut -d" " -f1  | xargs sudo supervisorctl restart	
```
