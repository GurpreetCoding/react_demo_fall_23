import { render, screen } from '@testing-library/react';
import IndexRoute from '../components/IndexRoute';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn()
}))

test('renders indexRoute', () => {
  const increment = jest.fn();
  render(<IndexRoute count={25} increment= {increment}/>);
  const linkElement = screen.getByText(/Disk, Planets, and Moons/i);
  expect(linkElement).toBeInTheDocument();
});
