# Composer
Composer is a dependency manager.
## Commands
```bash
composer init	Composer config generator
composer create-project symfony/skeleton APP_NAME	Create a new project.
"composer create-project drupal-composer/drupal-project:8.x-dev \
example --stability dev --no-interaction"	
composer update	
composer install	
composer install --no-dev --optimize-autoloader --prefer-dist	"exclude require-dev dependencies
Improve autoloading performance. Up to 37% PHP performance boost!
avoid cloning .git repos to vendor"
composer update --vvv	
composer help create-project	
php composer.phar update	
rm -rf ~/.composer/cache/	
rm -rf vendor/	
"curl -sS https://getcomposer.org/installer -o composer-setup.php
php composer-setup.php --install-dir=/usr/local/bin --filename=composer"	
composer create-project drupal-composer/drupal-project drupal8 --stability dev	
composer require --dev drupal/devel	This will ensure that the Devel module is available for your developers when they run composer install , but that it won’t ship with your production release
composer install --no-dev	Production release.
composer update --with-dependencies drupal/devel	Update the Devel module
composer update --with-dependencies drupal/foo drupal/bar	
composer update --with-dependencies drupal/*	
composer config extra.enable-patching true	If any of your dependencies declare patches (for example, let’s say a module requires a patch to Drupal core to work properly), you’ll need to explicitly allow that in your composer.json. 
composer remove drupal/devel	Removing a module or theme using Composer
composer remove --dev drupal/devel	
composer config --unset extra.patches.drupal/devel	If you need to remove a module or theme that has patches, the patches don’t automatically get removed from the composer.json file. You can either remove them by hand in your editor
composer config platform.php 7.1	As mentioned early on, it’s very important with a Composer-based workflow that the various environments use the same major and minor release of PHP. If you aren’t using Vagrant or Docker for local development and are finding it difficult to standardize, you can enforce a specific PHP version for Composer to adhere to in composer.json.
composer update --lock	any time you manually edit composer.json in this way without a subsequent composer update, the hash in composer.lock will be out of date, throwing warnings. To fix that without changing the code you have installed, run composer update --lock
composer show package/name	
composer require drupal/console:~1.0 --prefer-dist --optimize-autoloader	
composer prohibits drupal/core:8.5.0
```
