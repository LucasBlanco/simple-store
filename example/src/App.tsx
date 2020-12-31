import React from 'react'

import SimpleStoreProvider from '@lblanco/simple-store'
import Child from './Child'
import OtherChild from './OtherChild'

export interface Todo {
  id: number
  name: string
  checked: boolean
}

export interface Store {
  todos: Todo[]
}

const todos = [
  { id: 1, name: 'Install simple-store', checked: false },
  { id: 2, name: 'Profit!', checked: false }
]
const App = () => {
  return (
    <SimpleStoreProvider initialValue={{ todos }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Child />
        <OtherChild />
      </div>
    </SimpleStoreProvider>
  )
}

export default App
