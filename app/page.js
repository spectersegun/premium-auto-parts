'use client';
import Link from 'next/link';
import { AUTO_CATS } from '../lib/data';
import HeroCarousel from '../components/HeroCarousel';
import { Frame, BpButton } from '../components/Blueprint';
import VinForm from '../components/VinForm';

const STATS = [
  { num: '500+', label: 'Parts sourced & supplied' },
  { num: '7', label: 'Product categories' },
  { num: '7–14', label: 'Days by air freight' },
  { num: '100%', label: 'Fitment validated' },
];

const SLIDES = [
  { src: '/assets/brochure/hero-engine.jpg', label: 'Engine components' },
  { src: '/assets/brochure/hero-steering.jpg', label: 'Steering and suspension' },
  { src: '/assets/brochure/div-auto2.jpg', label: 'Spare parts' },
];

export default function AutoHome() {
  return (
    <>
      <div style={{ background: '#191b1e', color: '#fff' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '70px 24px 78px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 44, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--color-accent)', padding: '5px 12px', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-accent-300)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, background: 'var(--color-accent)', transform: 'rotate(45deg)' }} />USA-sourced · Nigeria-delivered
            </div>
            <h1 style={{ fontSize: 'clamp(38px,5.6vw,60px)', lineHeight: 1, margin: '0 0 20px', color: '#fff', textTransform: 'uppercase' }}>
              Right part.<br />First time.<br /><span style={{ color: 'var(--color-accent)' }}>Less downtime.</span>
            </h1>
            <p style={{ fontSize: 17, maxWidth: '38ch', color: 'color-mix(in srgb,#fff 78%,transparent)', margin: '0 0 28px' }}>
              Genuine, OEM and reputable aftermarket automobile spare parts imported direct from trusted U.S. suppliers — for dealers, workshops, fleets and owners.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/catalogue"><BpButton primary style={{ fontSize: 15, padding: '12px 22px' }}>Browse parts</BpButton></Link>
              <Link href="/contact"><BpButton style={{ fontSize: 15, padding: '12px 22px', color: '#fff', borderColor: 'color-mix(in srgb,#fff 34%,transparent)' }}>Match my VIN</BpButton></Link>
            </div>
          </div>
          <HeroCarousel slides={SLIDES} />
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '64px 24px 12px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Product categories</div>
        <h2 style={{ fontSize: 36, margin: '6px 0 26px', textTransform: 'uppercase' }}>Parts we supply</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(215px,1fr))', gap: 16 }}>
          {AUTO_CATS.map(c => (
            <Link key={c.code} href="/catalogue" style={{ color: 'inherit' }}>
              <Frame className="card" style={{ height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, letterSpacing: '.2em', color: 'var(--color-accent)' }}>{c.code}</div>
                <div className="card-title" style={{ marginTop: 8 }}>{c.name}</div>
                <p className="card-body">{c.desc}</p>
              </Frame>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '44px 24px' }}>
        <Frame style={{ background: 'var(--color-surface)', padding: '36px 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 34, alignItems: 'center' }}>
          <div>
            <span className="tag tag-accent">Value-added service</span>
            <h3 style={{ fontSize: 27, margin: '14px 0 10px', textTransform: 'uppercase' }}>Part matching by VIN / Make / Model</h3>
            <p style={{ fontSize: 15, opacity: .85, maxWidth: '52ch', margin: 0 }}>
              Send your VIN or vehicle details and we identify the exact part, validate fitment pre-shipping, and track it to your door — with after-sales support and warranty checks on every order.
            </p>
          </div>
          <VinForm />
        </Frame>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '12px 24px 56px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Logistics</div>
        <h2 style={{ fontSize: 30, margin: '6px 0 20px', textTransform: 'uppercase' }}>Two freight options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
          {[
            { h: 'Air freight', tag: 'Urgent', cls: 'tag-accent', t: '7–14 days', d: 'Higher cost, fastest turnaround — for downtime-critical and single-unit orders.' },
            { h: 'Sea freight', tag: 'Bulk', cls: 'tag-neutral', t: '4–8 weeks', d: 'Lower cost per unit — the economical choice for wholesale and fleet volumes.' },
          ].map(f => (
            <Frame key={f.h} style={{ padding: '26px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ fontSize: 22, margin: 0, textTransform: 'uppercase' }}>{f.h}</h3>
                <span className={'tag ' + f.cls}>{f.tag}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 42, color: 'var(--color-accent-700)', margin: '12px 0 4px' }}>{f.t}</div>
              <p className="text-muted" style={{ fontSize: 14, margin: 0 }}>{f.d}</p>
            </Frame>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px 56px' }}>
        <Frame style={{ background: 'var(--color-surface)', padding: '34px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
          {STATS.map(s => (
            <div key={s.label} style={{ padding: '6px 20px', borderLeft: '1px solid var(--color-divider)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 42, lineHeight: 1, color: 'var(--color-accent-700)' }}>{s.num}</div>
              <div className="text-muted" style={{ fontSize: 13, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </Frame>
      </div>
    </>
  );
}
