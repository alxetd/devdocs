---
pageClass: drupal
---
# Drupal
[[toc]]

## Code
### Explain using module how you can drop the table?
::: warning Answer
To drop the table you can use `db_drop_table` in install file.
:::

## General
### What is Drupal?
::: warning Answer
Drupal is free open source CMS (content management system) written in PHP.
:::

### Drupal advantages?
::: warning Answer
- Quicker content authoring
- Flexible architecture.
- It is designed for the mobile-first environment.
- Better language support.
:::

### What are main features of Drupal 8?
::: warning Answer
1. Theme.
Drupal 8 provides a new theming engine called Twig, which is PHP-based, flexible, fast, and secure.

2. Responsive.
All the built-in themes that come with Drupal 8 are responsive, along with an admin theme

3. Multilingual. 
When you install Drupal 8, the first choice you need to choose a base language for the installation.<br>
The installer will attempt to make the reasonable choice based on your browser language and should display the page in your browser language.<br>
If you are making a multilingual site, choose one of the languages that you want to use as installation language, and preferably not English

4. Easy Authoring (CKEditor):
New Drupal 8 features bring unprecedented power into the hands of the Content Editor, with WYSIWYG editor CKEditor now bundled with the core.

5. Better Support For Accessibility:
Drupal 8 has excellent support for industry standard accessibility technologies, like WAI-ARIA.
ARIA Live Announcements API and TabManager are significant improvements in Drupal 8, which provide control for rich Internet applications

6. Built-In Web Services:
Drupal 8 now makes it possible to use itself as a data source, and output content as JSON or XML.
You can even post data back to Drupal 8 from the front end. Hypertext Application Language (HAL) is implemented in Drupal 8 and makes exploitation of web service capabilities less painful.

7. Loading Speed:
Drupal 8 caches all entities and only loads JavaScript when necessary.
When a page is viewed, its content doesn’t need to be reloaded again.<br>
Previously viewed content is quickly loaded from the cache. Once configured and enabled, caching is completely automatic

8. Industry Standards:
Drupal 8 aligns with the latest PHP 7 standards like PSR-4, namespaces, and traits, and uses top notch, outstanding external libraries like Composer, PHPUnit, Guzzle, Zend Feed Component, Assetic to name a few.
Meanwhile, underlying Drupal 8 features modern, object-oriented code that's the order of the day, by Symfony 2.

9. Clean URLs:
In Drupal 8, 'Clean URLs' are enabled by default and can't be disabled.
:::

### What is a module in drupal?
::: warning Answer
A module is software (code) that extends Drupal features and/or functionality

1. Core modules - It comes by default with Drupal Installation.
2. Contributed modules - you can download them from drupal.org
3. CustomModules - These are custom modules created by you as per your need.
:::

### What modules do you always recommend and why?
::: warning Answer
Following are some important modules:

- Views - It makes displaying lists of content very easy.
- Panels - Panels gives you the ability to create custom pages easily.
- Ctools - Chaos tool suite(Ctools) is primarily a set of APIs and tools to improve the developer experience.
- Token - Tokens are little snippets of text that can be used as replacement patterns. For example, if your website sends out emails and you want to add in the users name, or you want fill in a link path with a node id to provide a helpful link to content, tokens will save the day.
- Pathauto - Pathauto simplifies creating clean and search engine friendly URLS for the various content you add to your site.
- Webform - If you want to provide easy to fill out forms for the visitors of your site, the Webform module will help you out.
- Rules - Drupal rules will allow you to set up condition actions.
- Date - This is useful for allowing the easy selections of dates in content types (with a nice date popup).
- Quicktabs - Makes it easy to add tabbed content without having to write your own Javascript/Jquery.
- Libraries - Makes organizing your various libraries of functionality easy (see Jquery UI above for an example).
- Google Analytics - It is very helpful in tracking your website, etc.
:::

### Which Design Pattern is used in Drupal?
::: warning Answer
Singleton Design pattern
:::

### How to add custom PHP codes in my Drupal pages or blocks?
::: warning Answer
By default, drupal does not allow adding PHP code directly inside a post or in a block.

To do this, you need to activate a drupal module called PHP filter via, Administer Site building Modules. Even though this module ships with drupal, it remains disabled by default.
:::

### Which module is best for implementing Search in Drupal 8?
::: warning Answer
Solr Search module
:::

### What is a regions in Drupal?
::: warning Answer
Regions are the main part of theme.

Example: Header, Content, Sidebar, Footer etc
:::

### How can we add Regions to a Drupal Theme?
::: warning Answer
Adding regions to a theme requires:

- Adding region meta-data to your THEMENAME.info.yml file.

- Editing your page.html.twig file and printing the new regions.

Default Regions
- page.header
- page.primary_menu
- page.secondary_menu
- page.highlighted
- page.help (dynamic help text, mostly for admin pages)
- page.content (main content of current page)
- page.sidebar_first
- page.sidebar_second
- page.footer
- page.breadcrumb
:::

### What is Drush? and it's benefits?
::: warning Answer
Drush is a command line interface that help us to speed up administrative and development tasks for Drupal websites

After installing Drush, we’ll be able to perform useful actions command line.

Drush runs on Drupal 6, 7 well as 8.
:::

### What is a node in Drupal?
::: warning Answer
A node is any piece of individual content, such as a page, poll, article etc. Most content on a Drupal website is stored/treated as "nodes".
:::

### What is a blocks in Drupal?
::: warning Answer
Blocks are the pieces of content that can be rendered anywhere on your Drupal website.
:::

### What is a taxonomy in Drupal?
::: warning Answer
Taxonomy, a powerful core module, gives your sites use of the organizational keywords known in other systems as categories, tags, or metadata.

It is used to classify the content of the website.
:::

### What do you mean by hooks in Drupal?
::: warning Answer
Hooks are how modules can interact with the core code of Drupal. They make it possible for a module to define new urls and pages within the site like hook_menu, to add content to pages like hook_block, hook_footer, to set up custom database hook_schema and more.
:::

### List the required files for theme in Drupal?
::: warning Answer
- style.css
- page.tpl.php
- info file
- template.php
- node.tpl.php
- block.tpl.php
:::

### List the required files for modules in Drupal?
::: warning Answer
- modulename.info
- modulename.module
- optional modulename.install
:::

### What is a theme?
::: warning Answer
A theme is a collection of files that define the presentation layer. You can also create one or more "sub-themes" or variations on a theme. Only the .info.yml file is required, but most themes and sub-themes will use other files as well.
:::

### What do you mean by subtheme in Drupal?
::: warning Answer
It are just like any other theme, with one difference:

They inherit the parent theme's resources.

It has no limits on the chaining capabilities connecting sub themes to their parents.
:::

### How to modify the form validation in Drupal?
::: warning Answer
We can use form alter hook and use this "'#required => true"
:::

### Why we used template.php in Drupal?
::: warning Answer
It allows you to override a theme function. It is available in the theme directory.
:::

### What are the new features of Drupal 8?
::: warning Answer
New Theme Engine : It includes a brand new theming engine called Twig. It is PHP-based, flexible, fast, and secure.
Drupal 8 is mobile first now
It has extensive multilingual features right out of the box.
It has configuration management built into it at the file-system level so that carrying over configuration elements in Drupal 8.
Easy Authoring : It bring unprecedented power into the hands of the Content Editor, with WYSIWYG editor CKEditor now bundled with the core.
Views Now Part of its Core :
Better Support for Accessibility
Web Services in-Built in Drupal 8
In Drupal 8 it has Guided Tour
JavaScript Automated Testing in Drupal 8
Loading Speed improvement in Drupal 8.
:::

### What is caching in Drupal Framework? Explain
::: warning Answer
Caching is a popular technique to optimize the website. Caching is a process that stores HTML, CSS, Image in some accessible space. It allows us to speed up our website using different configuration like page caching, block caching and lifetime for cached pages.
:::

### What do you mean by PDO in Drupal and how to enable PDO?
::: warning Answer
It is an acronym for PHP Data Objects. It is a lean, consistent way to access databases. PDO is just like a data access layer which uses a unified API.

To enable PDO, configure --enable-pdo and --with-pdo-sqlite --with-pdo-mysql or whatever database needs supporting by PDO

For windows users : For Apache, you will need to make sure php_pdo.dll and php_pdo_mysql.dll exist in the php/ext directory, un-comment or add the appropriate lines in php.ini, after that you have to restart the web server. In windows it may no longer be required to enable PDO when using newer versions of PHP, PHP version 5.3 and later. It refers to php_pdo.dll. However, you still need to activate php_pdo_mysql.dll for MySQL or for whichever database you are using.
:::

### Explain the SEO modules available in Drupal?
::: warning Answer
Some of SEO modules available in Drupal thats are given below:-

- Pathauto
- Meta tags/ Node words
- Service Links
- Google Analytics
- Related Links
- Search 404
- Site map
- Url list
:::

### What are the Databases Drupal supports?
::: warning Answer
Drupal supports MySQL, MariaDB, PostgreSQL and SQLite.
:::

### What do you mean by patch in Drupal?
::: warning Answer
It is a structured file that consists of a list of differences between one set of files and another. All code changes, additions, or deletions to Drupal core and contributed modules or themes between developers are done through patches in Drupal.
:::

### What is an entity?
### What are the bundles?
### What is difference between drupal 7 and 8?
### What is dependency injection in Drupal 8?
### What are services in Drupal 8?
### How to enable a module in Drupal 8?
### What are the difference between WordPress and Drupal?

### Does Drupal provides support?
::: warning Answer
Like with all open-source projects there is no commercial support available. Though, there is a vast online community for Drupal available via Forums and IRC online chat who are more than eager to answer your queries.
:::

### Explain what is render array in Drupal?
::: warning Answer
For Drupal content render arrays are the basic building blocks.  In Drupal, render arrays provide you a structured way to programmatically change the content before it is displayed.
:::

### Why Drupal needs database? What databases are supported?
::: warning Answer
Drupal stores its information in the database like individual pages, registered users and so on.  For your Drupal site, database forms the back end; it supports MySQL /MariaDB, PostgreSQL and in Drupal 7, SQLite.
:::

### Explain what is Drupal cron?
::: warning Answer
To execute commands or scripts automatically at specified time and date intervals, you have to use Drupal cron.
:::

### Explain what is Drupal weight?
::: warning Answer
The term Drupal weight is used to describe the priority or order in which the function is processed, or block/ node is displayed.

A heavier (+10) weights will appear lower in lists while a lower weight (-10) will float to the top of lists.
:::

### Explain what Drupal distributions is and when to use?
::: warning Answer
Distributions are full copies of Drupal, which includes Drupal Core, along with additional software as modules, themes, libraries and installation profiles.
:::

###  What is DRUSH in Drupal?
::: warning Answer
DRUSH is a command line shell and UNIX scripting interface for Drupal
:::

### Explain how database system of Drupal works?
::: warning Answer
In a database Drupal stores information, and each information has its own database table.  For example, the basic information regarding the nodes of your site are stored and kept in the node table, and if you use the CCK module to add fields to your nodes, the field information is stored in a separate table.
:::

### Explain how caching work in Drupal?
::: warning Answer
Through caching Drupal allows to speed up website using different configuration like page caching, block caching and lifetime for cached pages.

- Page Caching:  It enables the entire HTML of each page to be stored in the database.  It reduces the amount of queries needed
- Block Caching:  You can set the cache setting for a block in views, when block created by views
- Minimum cache lifetime:  It is the amount of time before the page cache is cleared. On each cron run, page caches are cleared.
- Expiration of cached pages: It only applies for an external mechanism, for example, your browser cache or varnish
:::
