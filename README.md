# @lblanco/simple-store

> minimal store for react projects using context.

[![NPM](https://img.shields.io/npm/v/@lblanco/simple-store.svg)](https://www.npmjs.com/package/@lblanco/simple-store) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lblanco/simple-store
```

## Example

https://lucasblanco.github.io/simple-store/

## Usage

```tsx
import React from 'react'

import SimpleStoreProvider from '@lblanco/simple-store'

interface Store {
  name: string
}

const App = () => {
  const initialStore = {
    name: 'Lucas'
  }

  return (
    <SimpleStoreProvider initialValue={initialStore}>
      <Child />
    </SimpleStoreProvider>
  )
}
```

```tsx
import React from 'react'

import { useSimpleStore } from '@lblanco/simple-store'

const Child = () => {
  const [store, updateStore] = useSimpleStore<Store>()

  const updateName = (name) => {
    updateStore((state) => {
      state.name = name
    })
  }

  return (
    <input
      type='text'
      value={store.name}
      onChange={(e) => updateName(e.target.value)}
    />
  )
}
```

## License

MIT © [LucasBlanco](https://github.com/LucasBlanco)
