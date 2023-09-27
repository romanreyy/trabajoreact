import { render, screen } from '@testing-library/react';
import App from './Conteiners/App';
import LogIn from "./Conteiners/logeo";

test('renders learn react link', () => {
  render(<App />);
  render(<LogIn />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
