// Pure function: given the full school list and the current filter
// settings, return just the schools that match. Kept separate from any
// component so it's easy to test and reason about on its own.
export function filterSchools(schools, filters) {
  const { searchText, city, authorityTypes, grades, onlineOnly } = filters

  return schools.filter((school) => {
    if (searchText) {
      const haystack = `${school.name} ${school.address.city ?? ''}`.toLowerCase()
      if (!haystack.includes(searchText.toLowerCase())) return false
    }

    if (city && school.address.city !== city) return false

    if (authorityTypes.length > 0 && !authorityTypes.includes(school.authority.type)) {
      return false
    }

    if (grades.length > 0) {
      const matchesAnyGrade = grades.some((g) => school.grades[g])
      if (!matchesAnyGrade) return false
    }

    if (onlineOnly && !school.programs.onlineLearning) return false

    return true
  })
}

// Build the sorted list of distinct cities for the city filter dropdown.
export function getCityList(schools) {
  const cities = new Set()
  schools.forEach((s) => {
    if (s.address.city) cities.add(s.address.city)
  })
  return Array.from(cities).sort()
}
