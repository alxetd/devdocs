# Common errors
## PHP Fatal error:  Allowed memory size of [...] bytes exhausted
```bash
PHP Fatal error:  Allowed memory size of 1610612736 bytes exhausted (tried to allocate 4096 bytes) in phar:///usr/local/bin/composer/src/Composer/DependencyResolver/Rule2Literals.php on line 53

Fatal error: Allowed memory size of 1610612736 bytes exhausted (tried to allocate 4096 bytes) in phar:///usr/local/bin/composer/src/Composer/DependencyResolver/Rule2Literals.php on line 53

Check https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors for more info on how to handle out of memory errors.%
```
Solution
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e5325b19b381bfd88ce90a5ddb7823406b2a38cff6bb704b0acc289a09c8128d4a8ce2bbafcd1fcbdc38666422fe2806') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
```bash
php -d memory_limit=-1 composer.phar install
```
Sources
- [https://getcomposer.org/download/](https://getcomposer.org/download/)

## failed to open stream: Too many open files
```bash
 [ErrorException]
  fopen([...]/89d4011354757068ea69752f2ec2808f1d41b32d.tar): failed to open stream: Too many open files
```
Solution
```bash
ulimit -n 10000
```
Sources
- [https://stackoverflow.com/questions/14748499/fatal-error-too-many-open-files](https://stackoverflow.com/questions/14748499/fatal-error-too-many-open-files)
