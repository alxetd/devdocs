# Laravel
## Best practices
- Use Repositories
- Use Services
- Write PhpUnit tests

## Commands
```bash
php artisan make:model Car --all
php artisan make:controller UserController
```

### Create Api
::: warning Answer
```bash
php artisan make:test CarTest --unit
php artisan make:model Car --all
php artisan make:request CarRequest
php artisan make:resource CarResource
php artisan make:resource CarResourceCollection
php artisan make:migration create_car_car_option_table --create=car_car_option
```
:::

### Other commands
::: warning Answer
```bash
php artisan make:model Car --api
```
:::
