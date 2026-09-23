import { Frame } from '../../components/Blueprint';
import PageHero from '../../components/PageHero';

const VALUES = [
  { title: 'Authentic parts', desc: 'Genuine, OEM and reputable aftermarket stock — never counterfeit.' },
  { title: 'Transparent pricing', desc: 'Clear, competitive pricing with no hidden mark-ups.' },
  { title: 'Fast delivery', desc: 'Air and sea freight options to match urgency and budget.' },
  { title: 'After-sales support', desc: 'Warranty checks and support after every order.' },
];

export default function About() {
  return (
    <>
      <PageHero field="#191b1e" uppercase kicker="About us" pad="60px 24px 66px"
                title="Parts you can trust, from a supplier who answers."
                blurb="PREMIUM Auto Parts is the automotive division of Premier HQ Limited — importing genuine, OEM and reputable aftermarket components from the USA into Nigeria, and standing behind every one." />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        <Frame style={{ padding: '30px 28px' }}>
          <span className="tag tag-accent">Mission</span>
          <p style={{ fontSize: 17, margin: '16px 0 0', lineHeight: 1.5 }}>To provide authentic, reliable and cost-effective automobile parts, reduce vehicle downtime and delays, and build a supply chain Nigeria’s workshops can trust.</p>
        </Frame>
        <Frame style={{ padding: '30px 28px' }}>
          <span className="tag tag-accent">Vision</span>
          <p style={{ fontSize: 17, margin: '16px 0 0', lineHeight: 1.5 }}>To be Nigeria’s most dependable importer of automobile spare parts — the first call for dealers, fleets and independent garages.</p>
        </Frame>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '40px 24px 20px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Value proposition</div>
        <h2 style={{ fontSize: 32, margin: '6px 0 24px', textTransform: 'uppercase' }}>Why workshops choose us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18 }}>
          {VALUES.map(v => (
            <Frame key={v.title} style={{ padding: '24px 22px' }}>
              <div style={{ width: 12, height: 12, background: 'var(--color-accent)', transform: 'rotate(45deg)', marginBottom: 16 }} />
              <h3 style={{ fontSize: 19, margin: '0 0 8px' }}>{v.title}</h3>
              <p className="text-muted" style={{ fontSize: 14, margin: 0 }}>{v.desc}</p>
            </Frame>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '40px 24px 70px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Sourcing</div>
        <h2 style={{ fontSize: 32, margin: '6px 0 24px', textTransform: 'uppercase' }}>Where our parts come from</h2>
        <Frame style={{ padding: '30px 28px', maxWidth: 640 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 30, color: 'var(--color-accent-700)' }}>United States</div>
          <p className="text-muted" style={{ fontSize: 15, margin: '10px 0 0' }}>Direct relationships with established U.S. suppliers and distributors — genuine, OEM and reputable aftermarket stock, validated before shipping and moved by air or sea to suit your urgency.</p>
        </Frame>
      </div>
    </>
  );
}
