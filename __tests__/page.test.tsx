import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
    it('renders a heading', () => {
        render(<h1>HelloWorldTest</h1>)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})
