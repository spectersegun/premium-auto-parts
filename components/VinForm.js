'use client';
import { submitOrder } from '../lib/order';
import { Field, Input } from './Field';
import { BpButton } from './Blueprint';

export default function VinForm() {
  const onSubmit = e => {
    e.preventDefault();
    const g = n => e.target.elements[n]?.value || '';
    submitOrder({ subject: 'Part matching request', body: 'Vehicle / VIN: ' + g('vin') + '\nPart needed: ' + g('part') });
  };
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Field label="VIN or Make / Model / Year"><Input name="vin" placeholder="e.g. 1HGCM82633A004352" /></Field>
      <Field label="Part needed"><Input name="part" placeholder="e.g. front brake pads, alternator" /></Field>
      <BpButton primary style={{ width: '100%' }}>Get a match</BpButton>
    </form>
  );
}
