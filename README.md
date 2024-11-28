# tsoa-error-reproduction

This project is for reproducing [#1629](https://github.com/lukeautry/tsoa/issues/1629) error.

## Reproduction procedures

```sh
npm i && npm run tsoa
```

## Occurring Error

```sh
Generate routes error.
 GenerateMetadataError: This node kind is unknown: 241
At unknown position...
This was caused by '<unknown name>'
  at TypeResolver.calcRefTypeName (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:560:83)
  at TypeResolver.calcTypeReferenceTypeName (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:712:34)
  at TypeResolver.getReferenceType (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:721:35)
  at TypeResolver.resolveTypeReferenceNode (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:468:21)
  at TypeResolver.resolve (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:293:21)
  at TypeResolver.resolveTypeReferenceNode (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:458:93)
  at TypeResolver.resolve (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:293:21)
  at MethodGenerator.Generate (/dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/methodGenerator.js:62:78)
  at /dir/tsoa-error-reproduction/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:46:41
  at Array.map (<anonymous>)
```

## Conditions under which errors occur

Define an interface in the controller's route method and return a response using it.

If the interface is defined outside the class, as in the ok method, no error occurs.
