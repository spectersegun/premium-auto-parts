'use client';
import { AUTO_CATS } from '../../lib/data';
import { useCart } from '../../lib/cart';
import { Frame, BpButton } from '../../components/Blueprint';
import PageHero from '../../components/PageHero';
import VinForm from '../../components/VinForm';

export default function Catalogue() {
  const { add } = useCart();
  return (
    <>
      <PageHero field="#191b1e" uppercase kicker="Parts catalogue" title="Everything under the bonnet"
                blurb="Seven core categories, sourced to order. Don’t see your part? Send the VIN — we source it." />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 20px', display: 'grid', gap: 18 }}>
        {AUTO_CATS.map(c => (
          <Frame key={c.code} style={{ padding: '26px 26px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 22, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '.2em', color: 'var(--color-accent)' }}>{c.code}</div>
              <h3 style={{ fontSize: 25, margin: '8px 0 0', textTransform: 'uppercase' }}>{c.name}</h3>
            </div>
            <p className="text-muted" style={{ fontSize: 15, margin: 0 }}>{c.long}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {c.items.map(i => <span key={i} className="tag tag-outline" style={{ fontSize: 12 }}>{i}</span>)}
              </div>
              <BpButton primary onClick={() => add(c.name, c.code)} style={{ padding: '9px 18px', fontSize: 14 }}>Add to order</BpButton>
            </div>
          </Frame>
        ))}
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '30px 24px 70px' }}>
        <Frame style={{ background: 'var(--color-surface)', padding: '34px 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 30, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: 26, margin: '0 0 10px', textTransform: 'uppercase' }}>Can’t find it? Send the VIN.</h3>
            <p style={{ fontSize: 15, opacity: .85, margin: 0, maxWidth: '46ch' }}>We match by VIN, make, model and year — then validate fitment before anything ships.</p>
          </div>
          <VinForm />
        </Frame>
      </div>
    </>
  );
}
