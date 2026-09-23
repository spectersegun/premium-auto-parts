'use client';
import { submitOrder } from '../../lib/order';
import PageHero from '../../components/PageHero';
import ContactPanel from '../../components/ContactPanel';
import { Field, Input, Textarea } from '../../components/Field';
import { BpButton } from '../../components/Blueprint';

export default function Contact() {
  const onSubmit = e => {
    e.preventDefault();
    const g = n => e.target.elements[n]?.value || '';
    submitOrder({
      subject: 'Auto Parts enquiry',
      body: 'Name: ' + g('name_') + '\nEmail: ' + g('email') + '\nVehicle/VIN: ' + g('vehicle') + '\n\n' + g('message'),
    });
  };
  return (
    <>
      <PageHero field="#191b1e" uppercase kicker="Contact" title="Tell us what you need." />
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '52px 24px 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 36 }}>
        <div>
          <h2 style={{ fontSize: 26, margin: '0 0 18px', textTransform: 'uppercase' }}>Send an enquiry</h2>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Field label="Name"><Input name="name_" required placeholder="Your name" /></Field>
            <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" /></Field>
            <Field label="Vehicle / VIN"><Input name="vehicle" placeholder="e.g. Toyota Hilux 2019" /></Field>
            <Field label="Message"><Textarea name="message" placeholder="Which parts do you need?" /></Field>
            <BpButton primary style={{ padding: '12px 22px', alignSelf: 'flex-start' }}>Send enquiry</BpButton>
          </form>
        </div>
        <ContactPanel uppercase />
      </div>
    </>
  );
}
