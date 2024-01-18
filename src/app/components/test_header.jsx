import { render } from '@testing-library/react';
import Header from './header';

test('renders header component', () => {
  render(<Header />);
});import { render } from '@testing-library/react';
import Header from './header';

test('renders header component', () => {
  render(<Header />);
});

test('renders logo image', () => {
  const { getByAltText } = render(<Header />);
  const logoImage = getByAltText('Logo de AstuRural');
  expect(logoImage).toBeInTheDocument();
});

test('renders social media links', () => {
  const { getByRole } = render(<Header />);
  const facebookLink = getByRole('link', { href: 'https://facebook.com' });
  const twitterLink = getByRole('link', { href: 'https://twitter.com' });
  const instagramLink = getByRole('link', { href: 'https://instagram.com' });
  const tiktokLink = getByRole('link', { href: 'https://tiktok.com' });
  const linkedinLink = getByRole('link', { href: 'https://linkedin.com' });
  const telegramLink = getByRole('link', { href: 'https://telegram.org' });
  const whatsappLink = getByRole('link', { href: 'https://whatsapp.com' });

  expect(facebookLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
  expect(instagramLink).toBeInTheDocument();
  expect(tiktokLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  expect(telegramLink).toBeInTheDocument();
  expect(whatsappLink).toBeInTheDocument();
});