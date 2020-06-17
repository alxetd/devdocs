# Drupal

## Entity [Read more](https://www.drupal.org/docs/8/api/entity-api)
### What is an entity?
Entity types in core come in two variants.
- Configuration Entity.
- Content Entity.

### Core entities
- Node/Content
- Users
- Custom Blocks
- Vocabulary and Terms
- Comments
- Files

## Commands
```bash
drush en -y search_api_solr
drush cache-rebuild
```

## Modules
https://www.drupal.org/project/search_api_solr
```bash
composer require drupal/search_api_solr
```
https://www.drupal.org/project/field_group
https://www.drupal.org/project/config_split
https://www.drupal.org/project/config_filter
https://www.drupal.org/project/weight

# Admin themes
[Adminimal - Responsive Administration Theme](https://www.drupal.org/project/adminimal_theme)
## Deploy
```bash
cd /var/www/notes/release/web
composer install
vendor/bin/drush en master_config
vendor/bin/drush cr

vendor/bin/drush sql-drop -y && vendor/bin/drush sql-cli < /var/www/notes/release/backup/notes.sql;
```
