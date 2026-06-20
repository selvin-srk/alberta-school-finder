import { useState, useMemo } from 'react'
import schoolsData from '../data/schools.json'
import FilterPanel from '../components/FilterPanel.jsx'
import SchoolMap from '../components/SchoolMap.jsx'
import SchoolList from '../components/SchoolList.jsx'
import { filterSchools, getCityList } from '../utils/filterSchools.js'
import './FinderPage.css'

const DEFAULT_FILTERS = {
  searchText: '',
  city: '',
  authorityTypes: [],
  grades: [],
  onlineOnly: false,
}

export default function FinderPage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selectedSchool, setSelectedSchool] = useState(null)

  // useMemo avoids re-filtering all 2,678 schools on every render —
  // only recalculates when filters or the underlying data change.
  const cities = useMemo(() => getCityList(schoolsData), [])
  const filteredSchools = useMemo(
    () => filterSchools(schoolsData, filters),
    [filters]
  )

  return (
    <div className="finder-page">
      <FilterPanel
        filters={filters}
        onChange={setFilters}
        cities={cities}
        resultCount={filteredSchools.length}
      />

      <div className="finder-map-pane">
        <SchoolMap
          schools={filteredSchools}
          onSelectSchool={setSelectedSchool}
        />
      </div>

      <div className="finder-list-pane">
        <SchoolList
          schools={filteredSchools}
          selectedCode={selectedSchool?.schoolCode}
          onSelectSchool={setSelectedSchool}
        />
      </div>
    </div>
  )
}
