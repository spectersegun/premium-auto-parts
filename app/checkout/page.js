'use client';
import { useState } from 'react';
import { useCart } from '../../lib/cart';
import { submitOrder, makeRef, itemLines } from '../../lib/order';
import { FREIGHT } from '../../lib/data';
import PageHero from '../../components/PageHero';
import EmptyCart from '../../components/EmptyCart';
import Confirmed from '../../components/Confirmed';
import { Frame, BpButton } from '../../components/Blueprint';
import { Field, Input, Textarea, Select } from '../../components/Field';

export default function Checkout() {
  const { items, count, bump, remove, clear } = useCart();
  const [ref, setRef] = useState('');

  if (ref) {
    return <Confirmed uppercase reference={ref}
      heading="Your order request is on its way"
      body="Your email client has opened with the full order summary. Send it and our team responds within one business day with availability, freight cost and a firm quote."
      links={[{ href: '/catalogue', label: 'Continue browsing' }, { href: '/', label: 'Back to home' }]} />;
  }

  const onSubmit = e => {
    e.preventDefault();
    const g = n => e.target.elements[n]?.value || '';
    const r = makeRef('AP');
    submitOrder({
      subject: 'Parts order request ' + r,
      body: 'ORDER REFERENCE: ' + r + '\n\nITEMS\n' + itemLines(items, true)
        + '\n\nFREIGHT: ' + g('freight')
        + '\n\nCUSTOMER\nName: ' + g('name_') + '\nCompany: ' + g('company') + '\nEmail: ' + g('email')
        + '\nPhone: ' + g('phone') + '\nVehicle / VIN: ' + g('vehicle') + '\nDelivery address: ' + g('address')
        + '\n\nNOTES\n' + g('notes'),
    });
    clear();
    setRef(r);
  };

  return (
    <>
      <PageHero field="#191b1e" uppercase kicker="Checkout" title="Confirm your order"
                blurb="We quote each order individually — pricing depends on part specification, freight choice and current supply. Submit below and we respond with a firm quote and payment instructions." />

      {count === 0 ? (
        <EmptyCart uppercase heading="Your order is empty" body="Add parts from the catalogue to start an order."
                   cta={{ href: '/catalogue', label: 'Browse parts' }} />
      ) : (
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '52px 24px 76px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 34, alignItems: 'start' }}>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ fontSize: 24, margin: '0 0 4px', textTransform: 'uppercase' }}>Your details</h2>
            <Field label="Name"><Input name="name_" required placeholder="Your name" /></Field>
            <Field label="Company / workshop"><Input name="company" placeholder="Optional" /></Field>
            <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" /></Field>
            <Field label="Phone"><Input name="phone" required placeholder="0803 000 0000" /></Field>
            <Field label="Vehicle / VIN"><Input name="vehicle" placeholder="e.g. Toyota Hilux 2019 · VIN" /></Field>
            <Field label="Delivery address"><Input name="address" required placeholder="Street, city, state" /></Field>
            <Field label="Freight option"><Select name="freight" options={FREIGHT} /></Field>
            <Field label="Notes"><Textarea name="notes" placeholder="Part numbers, quantities, urgency" /></Field>
            <BpButton primary style={{ padding: '13px 24px', alignSelf: 'flex-start', fontSize: 15 }}>Submit order request</BpButton>
          </form>

          <Frame style={{ padding: '28px 26px', background: 'var(--color-surface)' }}>
            <h2 style={{ fontSize: 20, margin: '0 0 18px', textTransform: 'uppercase' }}>Order summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {items.map(x => (
                <div key={x.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, paddingBottom: 14, borderBottom: '1px solid var(--color-divider)' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11, letterSpacing: '.18em', color: 'var(--color-accent)' }}>{x.code}</div>
                    <div style={{ fontSize: 15, marginTop: 3 }}>{x.name}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button type="button" className="btn btn-ghost" onClick={() => bump(x.name, -1)} style={{ padding: '2px 9px', fontSize: 15 }}>−</button>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, minWidth: 18, textAlign: 'center' }}>{x.qty}</span>
                    <button type="button" className="btn btn-ghost" onClick={() => bump(x.name, 1)} style={{ padding: '2px 9px', fontSize: 15 }}>+</button>
                  </div>
                  <button type="button" className="btn btn-ghost" onClick={() => remove(x.name)} style={{ padding: '2px 8px', fontSize: 13, color: 'var(--color-accent-700)' }}>Remove</button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '2px solid var(--color-accent)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, letterSpacing: '.1em', textTransform: 'uppercase' }}>Total items</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 30, color: 'var(--color-accent-700)' }}>{count}</span>
            </div>
            <p className="text-muted" style={{ fontSize: 13, margin: '16px 0 0' }}>Price is quoted per order. No payment is taken on this site — we confirm availability, fitment and freight, then send a firm quote with payment instructions.</p>
          </Frame>
        </div>
      )}
    </>
  );
}
