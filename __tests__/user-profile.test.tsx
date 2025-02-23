import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserProfile from '../src/components/UserProfile'

describe('UserProfile', () => {
  it('renders the team heading', () => {
    render(<UserProfile />)
    const heading = screen.getByRole('heading', { name: /our team/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders all team members', () => {
    render(<UserProfile />)
    const teamMembers = screen.getAllByRole('listitem')
    expect(teamMembers).toHaveLength(6) // Adjust the number based on the actual number of team members
  })

  it('renders team member details', () => {
    render(<UserProfile />)
    const memberName = screen.getByText('Leslie Alexander')
    const memberRole = screen.getByText('Co-Founder / CEO')
    expect(memberName).toBeInTheDocument()
    expect(memberRole).toBeInTheDocument()
  })
})
