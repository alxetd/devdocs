# Code examples

```php
/**
* Implements hook_install().
*/
function hook_install() {
  \Drupal::service('module_installer')->install(['module_name']);
}

/**
 * Implements hook_update_N().
 */
function hook_update_8000()
{
  \Drupal::service('module_installer')->install(['module_name']);
}
```

Alias
```php
$aliasManager = \Drupal::service('path.alias_manager');
$aliasManager->getAliasByPath('/node/' . $product->id())
```

## Query
```php
$products = \Drupal::entityTypeManager()
    ->getListBuilder('node')
    ->getStorage()
    ->loadByProperties([
    'type' => 'product',
    'status' => 1
    ]);
```

```php
$productId = $node->get('field_product')->getValue()[0]['target_id'];
$nodes = \Drupal::entityQuery('node')
    ->condition('type', $resourceTypes, 'IN')
    ->condition('field_product', $productId)
    ->condition('nid', $resourceIds, 'NOT IN')
    ->sort('created', 'DESC')
    ->range(0, 3 - $count)
    ->execute();
foreach ($nodes as $nid) {
  $node->field_related_resources[] = $nid;
}
$node->save();
```

```php
$mediaEntities = \Drupal::entityQuery('media')
    ->condition('bundle', 'external_video')
    ->execute();
foreach ($mediaEntities as $nid) {
    $media = Media::load($nid);
    $media->field_highlight = false;
    $media->save();
}
```
