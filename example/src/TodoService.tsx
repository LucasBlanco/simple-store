import { useSimpleStore } from '@lblanco/simple-store'
import { Store, Todo } from './App'

export const useTodos = () => {
  const [{ todos }, update] = useSimpleStore<Store>()

  const toggleTodo = (todo: Todo) => {
    update(({ todos }) => {
      const foundTodo = todos.find((x) => x.id === todo.id)!
      foundTodo.checked = !foundTodo.checked
    })
  }
  return {
    todos,
    toggleTodo
  }
}
