import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo text', () => {
  const todo = {
    text: 'Learn about containers',
    done: false
  }

  render(<Todo todo={todo} />)

  expect(screen.getByText('Learn about containers')).toBeInTheDocument()
})
