import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../src/app/page'

describe('RootLayoutComponent', () => {
  it('renders correctly with children', () => {
    render(<Page />)
    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()
  })
})
