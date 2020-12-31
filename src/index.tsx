/* eslint-disable no-unused-vars */
import produce, { Draft } from 'immer'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react'

type SimpleStoreInterface<T> = [T, UpdaterFn<T>]

const SimpleStoreContext = createContext<SimpleStoreInterface<unknown>>(
  undefined!
)

type CallbackFn<T> = (state: Draft<T>) => void
type UpdaterFn<T> = (cb: CallbackFn<T>) => void

interface Props<T> extends PropsWithChildren<any> {
  initialValue: T
}

function SimpleStoreProvider<T extends Object>(props: Props<T>) {
  const [store, setStore] = useState<T>(props.initialValue)

  const update: UpdaterFn<T> = (cb) => {
    const newState = produce<T>(store, (draft) => {
      cb(draft)
    })
    setStore(newState)
  }

  const value = useMemo(() => [store, update], [store]) as [T, UpdaterFn<T>]

  return <SimpleStoreContext.Provider value={value} {...props} />
}

export function useSimpleStore<T>() {
  const context = useContext(SimpleStoreContext)
  if (!context) {
    throw new Error(
      `useSimpleStore must be used inside a SimpleStoreProvider. You should wrap all the components that uses the store inside a single SimpleStoreProvider`
    )
  }
  return context as SimpleStoreInterface<T>
}

export default SimpleStoreProvider
