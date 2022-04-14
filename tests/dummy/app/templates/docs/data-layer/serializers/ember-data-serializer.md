The `EmberDataSerializer` extends the `RestSerializer` with the added functionality of`primaryKey` and `attrs` 
(renamed `transforms` as `attrs` was already in use by Mirage) properties. 
These properties work the same as the properties provided.

## Primary Key
This serializer provides for a property `primaryKey` that works the same as the `primaryKey` property on an ember data serializer. 
By default this property will be `id` but if you assign a different value, that value will be used in the JSON instead of `id`. 
This means that if you are using the `primaryKey` property on your ember data serializer, using the same property on the mirage serializer 
will perform the same function.
If you were using the `RestSerializer` you would need to override the `serialize` and `normalize` functions to do the transform yourself. 

Using `EmberDataSerializer` you can let the serializer perform this transformation for you. To be clear, when data is received by Mirage, this will take the 
value of `addressId` from the JSON and use it as the `id` for the Mirage model. When Mirage serializers it's model into JSON, it will 
use the value for the `id` property and assign it to the property `addressId`.

```js
import { EmberDataSerializer } from "ember-cli-mirage";

export default EmberDataSerializer.extend({
  primaryKey: "addressId"
});
```

## Transforms

Transforms provides the same function as `attrs` for the ember data serializers however this transformation is happening
on the server side for Mirage. This allows your mirage models to look more like your actual server models.

Example of a Mirage serializer extending from EmberDataSerializer
```js
import { EmberDataSerializer } from "ember-cli-mirage";

export default EmberDataSerializer.extend({
  transforms: {
    name: "externalName",
    address: {key: "addressId", serialize: "ids"},
    age: {key: "externalAge"},
    blogPosts: {key: "blogPostIds"}
  }
});
```

If you would like Mirage to apply the transforms from your ember data serializers for you see 
{{docs-link 'Advanced Configuration of Serializers' 'docs.advanced.server-configuration'}}.


