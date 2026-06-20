import './FilterPanel.css'
import { AUTHORITY_COLORS } from '../utils/authorityColors.js'

const AUTHORITY_OPTIONS = [
  'Public',
  'Separate',
  'Francophone',
  'Charter',
  'Private School',
  'ECS Private Operator',
  'Provincial',
  'Federal First Nations',
]

const GRADE_OPTIONS = [
  { key: 'ecs', label: 'Early Childhood (ECS)' },
  { key: 'elementary', label: 'Elementary' },
  { key: 'juniorHigh', label: 'Junior High' },
  { key: 'seniorHigh', label: 'Senior High' },
]

export default function FilterPanel({ filters, onChange, cities, resultCount }) {
  function toggleAuthority(type) {
    const next = filters.authorityTypes.includes(type)
      ? filters.authorityTypes.filter((t) => t !== type)
      : [...filters.authorityTypes, type]
    onChange({ ...filters, authorityTypes: next })
  }

  function toggleGrade(key) {
    const next = filters.grades.includes(key)
      ? filters.grades.filter((g) => g !== key)
      : [...filters.grades, key]
    onChange({ ...filters, grades: next })
  }

  function clearAll() {
    onChange({
      searchText: '',
      city: '',
      authorityTypes: [],
      grades: [],
      onlineOnly: false,
    })
  }

  const hasActiveFilters =
    filters.searchText || filters.city || filters.authorityTypes.length > 0 ||
    filters.grades.length > 0 || filters.onlineOnly

  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <h2>Filters</h2>
        {hasActiveFilters && (
          <button className="clear-btn" onClick={clearAll}>
            Clear all
          </button>
        )}
      </div>

      <p className="result-count">{resultCount.toLocaleString()} schools</p>

      <div className="filter-group">
        <label htmlFor="search-input">Search by name or city</label>
        <input
          id="search-input"
          type="text"
          placeholder="e.g. Calgary, Riverside..."
          value={filters.searchText}
          onChange={(e) => onChange({ ...filters, searchText: e.target.value })}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="city-select">City</label>
        <select
          id="city-select"
          value={filters.city}
          onChange={(e) => onChange({ ...filters, city: e.target.value })}
        >
          <option value="">All cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Grade range</label>
        <div className="checkbox-list">
          {GRADE_OPTIONS.map((g) => (
            <label key={g.key} className="checkbox-row">
              <input
                type="checkbox"
                checked={filters.grades.includes(g.key)}
                onChange={() => toggleGrade(g.key)}
              />
              {g.label}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>Authority type</label>
        <div className="checkbox-list">
          {AUTHORITY_OPTIONS.map((type) => (
            <label key={type} className="checkbox-row">
              <input
                type="checkbox"
                checked={filters.authorityTypes.includes(type)}
                onChange={() => toggleAuthority(type)}
              />
              <span
                className="authority-dot"
                style={{ background: AUTHORITY_COLORS[type] }}
                aria-hidden="true"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={filters.onlineOnly}
            onChange={(e) => onChange({ ...filters, onlineOnly: e.target.checked })}
          />
          Offers online learning
        </label>
      </div>
    </aside>
  )
}
