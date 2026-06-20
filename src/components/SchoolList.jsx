import { getAuthorityHex } from '../utils/authorityColors.js'
import './SchoolList.css'

const GRADE_LABELS = {
  ecs: 'ECS',
  elementary: 'Elementary',
  juniorHigh: 'Jr High',
  seniorHigh: 'Sr High',
}

export default function SchoolList({ schools, selectedCode, onSelectSchool }) {
  if (schools.length === 0) {
    return (
      <div className="school-list-empty">
        <p>No schools match these filters.</p>
        <p className="hint">Try removing a filter or clearing your search.</p>
      </div>
    )
  }

  return (
    <ul className="school-list">
      {schools.map((school) => {
        const grades = Object.entries(school.grades)
          .filter(([, taught]) => taught)
          .map(([key]) => GRADE_LABELS[key])

        return (
          <li
            key={school.schoolCode}
            className={`school-card ${selectedCode === school.schoolCode ? 'selected' : ''}`}
            onClick={() => onSelectSchool(school)}
          >
            <div
              className="school-card-bar"
              style={{ background: getAuthorityHex(school.authority.type) }}
              aria-hidden="true"
            />
            <div className="school-card-body">
              <h3>{school.name}</h3>
              <p className="school-card-authority">{school.authority.type} · {school.authority.name}</p>
              <p className="school-card-address">
                {school.hasPhysicalAddress
                  ? `${school.address.line1}, ${school.address.city}`
                  : 'No physical campus listed'}
                {!school.coordinates && school.hasPhysicalAddress && (
                  <span className="no-pin-note"> — not shown on map</span>
                )}
                {school.coordinates?.approximate && (
                  <span className="approx-pin-note"> — approximate location</span>
                )}
              </p>
              {grades.length > 0 && (
                <p className="school-card-grades">{grades.join(' · ')}</p>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
