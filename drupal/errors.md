# Errors
## Attempting to re-run cron while it is already running
::: warning Answer
```bash
drush sqlq "DELETE FROM semaphore WHERE name = 'cron';"
```
:::
