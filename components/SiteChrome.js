'use client';
import { CartProvider } from '../lib/cart';
import GroupStrip from './GroupStrip';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Parts Catalogue' },
  { href: '/about', label: 'About' },
];

export default function SiteChrome({ children }) {
  return (
    <CartProvider>
      <div className="theme-auto" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <GroupStrip field="#191b1e" accent="#e8a08e" />
        <Header base="/" division="Auto Parts" nav={NAV} cartLabel="Cart" uppercase
                cta={{ href: '/contact', label: 'Get a Quote' }} />
        <main style={{ flex: 1 }}>{children}</main>
        <CartDrawer title="Your order" showCodes scrim="rgba(10,11,13,.55)" totalLabel="Items"
                    emptyText="Nothing added yet. Browse the catalogue and add the parts you need."
                    checkoutHref="/checkout" />
        <Footer base="/" division="Auto Parts" footerBg="#0f1113"
                blurb="USA-sourced automobile spare parts, imported and distributed across Nigeria."
                nav={[...NAV, { href: '/contact', label: 'Contact' }]} />
      </div>
    </CartProvider>
  );
}
