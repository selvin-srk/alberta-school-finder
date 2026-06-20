import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { getAuthorityHex } from '../utils/authorityColors.js'
import 'leaflet/dist/leaflet.css'
import './SchoolMap.css'

// Roughly the center of Alberta, used as the map's starting view.
const ALBERTA_CENTER = [54.5, -115.0]
const DEFAULT_ZOOM = 5

export default function SchoolMap({ schools, onSelectSchool }) {
  const mappable = schools.filter((s) => s.coordinates)

  return (
    <div className="school-map-wrapper">
      <MapContainer
        center={ALBERTA_CENTER}
        zoom={DEFAULT_ZOOM}
        className="school-map"
        scrollWheelZoom={true}
      >
        {/* OpenStreetMap tiles — free, no API key required */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mappable.map((school) => (
          <CircleMarker
            key={school.schoolCode}
            center={[school.coordinates.lat, school.coordinates.lon]}
            radius={school.coordinates.approximate ? 5 : 6}
            pathOptions={{
              color: getAuthorityHex(school.authority.type),
              fillColor: getAuthorityHex(school.authority.type),
              fillOpacity: school.coordinates.approximate ? 0.45 : 0.85,
              weight: school.coordinates.approximate ? 1 : 1.5,
              dashArray: school.coordinates.approximate ? '2,2' : null,
            }}
            eventHandlers={{
              click: () => onSelectSchool?.(school),
            }}
          >
            <Popup>
              <div className="map-popup">
                <strong>{school.name}</strong>
                <span>{school.authority.type}</span>
                <span>{school.address.line1}, {school.address.city}</span>
                {school.coordinates.approximate && (
                  <span className="approx-note">Approximate location</span>
                )}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  )
}
