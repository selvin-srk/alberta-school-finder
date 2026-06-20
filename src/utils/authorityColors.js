// Single source of truth mapping each Authority Type to its color.
// Used by both the map pins and the list view, so a school's color
// means the same thing everywhere on the site.
export const AUTHORITY_COLORS = {
  'Public': 'var(--color-public)',
  'Separate': 'var(--color-separate)',
  'Francophone': 'var(--color-francophone)',
  'Charter': 'var(--color-charter)',
  'Private School': 'var(--color-private)',
  'ECS Private Operator': 'var(--color-private)',
  'Provincial': 'var(--color-private)',
  'Federal First Nations': 'var(--color-private)',
}

// Hex versions for use inside Leaflet markers, which can't read CSS variables.
export const AUTHORITY_HEX = {
  'Public': '#2E7D6B',
  'Separate': '#A8543E',
  'Francophone': '#6B5B95',
  'Charter': '#C9962C',
  'Private School': '#5A6B7A',
  'ECS Private Operator': '#5A6B7A',
  'Provincial': '#5A6B7A',
  'Federal First Nations': '#5A6B7A',
}

export function getAuthorityHex(type) {
  return AUTHORITY_HEX[type] || '#5A6B7A'
}
