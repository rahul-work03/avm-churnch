import { AsyncLocalStorage } from 'node:async_hooks';
import Module from 'node:module';
import React from 'react';

// 1. Next.js cache runtime support
globalThis.AsyncLocalStorage = AsyncLocalStorage;

// 2. Next.js image component mock for node-level SSR testing
const origRequire = Module.prototype.require;
Module.prototype.require = function (path) {
  if (path === 'next/image' || path.endsWith('/image-external') || path.endsWith('/image-component')) {
    const MockImg = (props) => {
      const cleanProps = { ...props };
      if (typeof cleanProps.fill === 'boolean') {
        cleanProps.fill = cleanProps.fill ? 'true' : 'false';
      }
      return React.createElement('img', cleanProps);
    };
    MockImg.default = MockImg;
    return MockImg;
  }
  return origRequire.apply(this, arguments);
};
