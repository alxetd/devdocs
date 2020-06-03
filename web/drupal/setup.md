# Setup

## Setup a new project using Barrio theme

To set up a new project using Barrio theme based on bootstrap 4 and sass:

- Add new project to Acquia dev desktop and install Drupal 8.
- In the '/themes' folder, create a sub folder named '/themes/contrib'. Folder structure should look like this:

```$xslt
Drupal Root
       |
       | - themes     
            | - contrib
                 | - bootstrap_barrio
                 | - bootstrap_sass
```

- Download and install [Barrio theme](https://www.drupal.org/project/bootstrap_barrio) in the '/themes/contrib' folder
- Download and install [Barrio SASS starter kit](https://www.drupal.org/project/bootstrap_sass) in the '/themes/contrib' folder and set it as default theme.

Now you can create a subtheme through a shell script

- Go to '/themes/contrib/bootstrap_sass'.
- Run ```sh scripts/create_subtheme.sh```.
- Answer the series of configuration questions and then create your subtheme.
- If you don't already have a "themes/custom" folder, it will create one, then place your subtheme there.
- If you don't have gulp installed, install it globally using ```npm install --global gulp-cli```

From the subtheme folder: 

- Install dependencies including Bootstrap latest version: ```npm install```
- Now run ```gulp```. This will generate a style.css file with mappings for debbuging and a style.min.css file for production. You will need to change the reference to the file manually on your SUBTHEME.libraries.yml file.

### To disable cache and enable development mode:

Use the following instructions if you want to disable cache and enable development mode:
 
- Copy example.settings.local.php from '/sites/' to /sites/default and rename it 'settings.local.php'
- Uncomment ```$settings['cache']['bins']['render'] = 'cache.backend.null';``` if is commented.
- In /sites/default/settings.php uncomment: 

```
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
include $app_root . '/' . $site_path . '/settings.local.php';
}
```

- In /sites/development.services.yml in the ‘parameters’ section overwrite twig.config configuration. It should look like this:

```$xslt
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto-reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
```

### Install twig components module

- In the root of the project, where we have the composer files, run ```composer require mortenson/twig-components-ssr```
- 
