import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

describe('Register', () => {
  it('renders the Register Page heading', () => {
    render(<Register />);
    expect(screen.getByRole('heading', { name: /register page/i })).toBeInTheDocument();
  });

  it('shows username error for invalid username', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(usernameInput, { target: { value: 'short' } });
    expect(screen.getByText(/username must be at least 8 characters/i)).toBeInTheDocument();
  });

  it('clears username error for valid username', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(usernameInput, { target: { value: 'short' } });
    fireEvent.change(usernameInput, { target: { value: 'Valid@123' } });
    expect(screen.queryByText(/username must be at least 8 characters/i)).not.toBeInTheDocument();
  });

  it('shows mobile error for invalid mobile', () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText(/uk mobile number/i);
    fireEvent.change(mobileInput, { target: { value: '12345' } });
    expect(screen.getByText(/mobile number must start with 07/i)).toBeInTheDocument();
  });

  it('clears mobile error for valid mobile', () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText(/uk mobile number/i);
    fireEvent.change(mobileInput, { target: { value: '12345' } });
    fireEvent.change(mobileInput, { target: { value: '07123456789' } });
    expect(screen.queryByText(/mobile number must start with 07/i)).not.toBeInTheDocument();
  });
});
