# Drupal

## Commands
```bash
drush en -y search_api_solr
drush cache-rebuild
```
## Modules
```bash
composer require drupal/search_api_solr
```

## Deploy
```bash
cd /var/www/notes/release/web
composer install
vendor/bin/drush en master_config
vendor/bin/drush cr

vendor/bin/drush sql-drop -y && vendor/bin/drush sql-cli < /var/www/notes/release/backup/notes.sql;
```
