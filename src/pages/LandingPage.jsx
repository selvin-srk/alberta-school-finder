import { Link } from 'react-router-dom'
import './LandingPage.css'

const AUTHORITY_LEGEND = [
  { type: 'Public', count: 1576, color: 'var(--color-public)' },
  { type: 'Separate (Catholic)', count: 436, color: 'var(--color-separate)' },
  { type: 'Private', count: 376, color: 'var(--color-private)' },
  { type: 'Charter', count: 58, color: 'var(--color-charter)' },
  { type: 'Francophone', count: 49, color: 'var(--color-francophone)' },
]

export default function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">2,678 schools · every authority in the province</p>
          <h1>
            Every K-12 school in Alberta,
            <br />
            on one map.
          </h1>
          <p className="hero-sub">
            Public, Catholic, francophone, charter, and private — search,
            filter, and compare schools across the whole province in one
            place. Built for parents, newcomers, and anyone choosing a
            school for September.
          </p>
          <Link to="/finder" className="hero-cta">
            Find a school →
          </Link>
        </div>

        <div className="hero-legend" aria-label="School authority types in Alberta">
          <p className="legend-title">School authorities, by type</p>
          {AUTHORITY_LEGEND.map((item) => (
            <div className="legend-row" key={item.type}>
              <span
                className="legend-dot"
                style={{ background: item.color }}
                aria-hidden="true"
              />
              <span className="legend-label">{item.type}</span>
              <span className="legend-count">{item.count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="why-item">
          <h2>One source, the whole province</h2>
          <p>
            No more checking five different school board websites. Every
            school authority in Alberta, from Calgary Board of Education to
            a single rural colony school, lives in the same searchable list.
          </p>
        </div>
        <div className="why-item">
          <h2>Built for newcomers</h2>
          <p>
            Alberta's school system — public, separate, francophone,
            charter, private — can be confusing if you're new to the
            province. The finder explains what each type means as you
            browse.
          </p>
        </div>
        <div className="why-item">
          <h2>Filter by what matters</h2>
          <p>
            Grade range, city, authority type, and programs like home
            education support or online learning — narrow thousands of
            schools down to the handful that fit your family.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          Data sourced from Alberta Education's public school directory.
          This is an independent tool, not affiliated with Alberta Education
          or any school authority.
        </p>
      </footer>
    </main>
  )
}
