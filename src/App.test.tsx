import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => {
            const { initial, animate, transition, whileHover, ...rest } = props;
            return <div {...rest}>{children}</div>;
        },
        span: ({ children, ...props }: any) => {
            const { initial, animate, transition, ...rest } = props;
            return <span {...rest}>{children}</span>;
        },
        h1: ({ children, ...props }: any) => {
            const { initial, animate, transition, ...rest } = props;
            return <h1 {...rest}>{children}</h1>;
        },
    },
}));

describe('PageCraft Editorial Demo', () => {
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders navigation with correct links', () => {
        render(<App />);
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getByText(/Anthology/i)).toBeInTheDocument();
        expect(screen.getByText(/Techniques/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('renders cover section with heading', () => {
        render(<App />);
        expect(screen.getAllByText(/DESIGNING/i)).toBeTruthy();
        expect(screen.getAllByText(/FOR THE/i)).toBeTruthy();
        expect(screen.getAllByText(/MODERN/i)).toBeTruthy();
        expect(screen.getAllByText(/WEB/i)).toBeTruthy();
    });

    it('renders case studies section', () => {
        render(<App />);
        expect(screen.getByText(/Case/i)).toBeInTheDocument();
        expect(screen.getByText(/Studies/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Pattern 0/i)).toBeTruthy();
    });

    it('renders newsletter section', () => {
        render(<App />);
        expect(screen.getAllByText(/Join The/i)).toBeTruthy();
        expect(screen.getAllByText(/Collective/i)).toBeTruthy();
        expect(screen.getByLabelText(/Enter your email address/i)).toBeInTheDocument();
    });

    it('has proper ARIA labels for accessibility', () => {
        render(<App />);
        expect(screen.getByRole('application', { name: /PageCraft Editorial Demo/i })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders search and menu buttons', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Search content/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument();
    });
});
