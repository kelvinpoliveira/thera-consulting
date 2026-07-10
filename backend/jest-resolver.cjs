/**
 * Custom Jest resolver: strips .js extension from relative imports so
 * ts-jest can locate the corresponding .ts source files.
 * Needed because the project uses `moduleResolution: nodenext` which
 * requires explicit .js extensions in TypeScript sources, but Jest's
 * module resolver needs to find the .ts files.
 *
 * Must be CommonJS (.cjs) because jest config can reference it even when
 * the project has "type": "module".
 */

'use strict';

module.exports = function (moduleName, options) {
  // Strip .js from relative imports and let Jest find the .ts file
  if (moduleName.startsWith('.') && moduleName.endsWith('.js')) {
    const withoutExt = moduleName.slice(0, -3);
    try {
      return options.defaultResolver(withoutExt, options);
    } catch {
      // fall through to default
    }
  }
  return options.defaultResolver(moduleName, options);
};
