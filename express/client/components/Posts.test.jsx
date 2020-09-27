import React from 'react';
import { screen, render } from '@testing-library/react'
import Posts from './Posts'

describe('Posts.jsx', () => {
    test('Renders correct component', () => {
        render(<Posts />)
        const posts = screen.getByRole('heading')
        expect(posts.innerHTML).toContain('Posts')
    })
})