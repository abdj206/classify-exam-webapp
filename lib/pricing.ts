export type SchoolSize = 'small' | 'medium' | 'large' | 'very-large'

export const ZETA_BY_COUNTRY: Record<string, number> = {
  // A
  'Afghanistan': 1.2,
  'Albania': 5.0,
  'Algeria': 4.3,
  'American Samoa': 6.0,
  'Andorra': 9.0,
  'Angola': 2.3,
  'Anguilla': 7.0,
  'Antigua and Barbuda': 6.5,
  'Argentina': 5.5,
  'Armenia': 4.3,
  'Aruba': 7.2,
  'Australia': 9.4,
  'Austria': 9.0,
  'Azerbaijan': 4.8,

  // B
  'The Bahamas': 8.0,
  'Bahrain': 8.2,
  'Bangladesh': 2.2,
  'Barbados': 6.5,
  'Belarus': 5.2,
  'Belgium': 9.0,
  'Belize': 4.8,
  'Benin': 1.8,
  'Bermuda': 9.5,
  'Bhutan': 3.3,
  'Bolivia': 3.6,
  'Bosnia and Herzegovina': 4.5,
  'Botswana': 4.5,
  'Brazil': 5.5,
  'British Virgin Islands': 7.5,
  'Brunei': 8.5,
  'Bulgaria': 6.0,
  'Burkina Faso': 1.6,
  'Burundi': 1.2,

  // C
  'Cabo Verde (Cape Verde)': 3.2,
  'Cambodia': 2.7,
  'Cameroon': 2.3,
  'Canada': 9.5,
  'Cayman Islands': 9.0,
  'Central African Republic': 1.0,
  'Chad': 1.4,
  'Chile': 6.8,
  'China': 6.4,
  'Cocos (Keeling) Islands': 7.5,
  'Colombia': 5.0,
  'Comoros': 1.8,
  'Democratic Republic of the Congo': 1.0,
  'Republic of the Congo': 2.0,
  'Cook Islands': 6.5,
  'Costa Rica': 6.0,
  "Côte d’Ivoire": 2.6,
  'Croatia': 6.8,
  'Cuba': 4.2,
  'Curaçao': 7.0,
  'Cyprus': 7.5,
  'Czech Republic': 7.8,

  // D, E, F
  'Denmark': 9.4,
  'Djibouti': 2.4,
  'Dominica': 4.8,
  'Dominican Republic': 5.0,
  'East Timor (Timor-Leste)': 2.3,
  'Ecuador': 4.7,
  'Egypt': 3.0,
  'El Salvador': 3.8,
  'Equatorial Guinea': 3.8,
  'Eritrea': 1.5,
  'Estonia': 7.8,
  'Eswatini (Swaziland)': 3.2,
  'Ethiopia': 1.8,
  'Falkland Islands': 7.0,
  'Faroe Islands': 8.0,
  'Fiji': 4.5,
  'Finland': 9.0,
  'France': 9.0,
  'French Guiana': 6.5,
  'French Polynesia': 6.8,

  // G, H
  'Gabon': 4.4,
  'The Gambia': 1.8,
  'Gaza Strip': 1.8,
  'Georgia': 4.2,
  'Germany': 9.2,
  'Ghana': 2.6,
  'Gibraltar': 9.0,
  'Greece': 7.4,
  'Greenland': 7.5,
  'Grenada': 5.0,
  'Guadeloupe': 6.5,
  'Guam': 7.0,
  'Guatemala': 3.6,
  'Guernsey': 9.2,
  'Guinea': 1.7,
  'Guinea-Bissau': 1.5,
  'Guyana': 3.8,
  'Haiti': 1.5,
  'Honduras': 3.0,
  'Hong Kong': 9.8,
  'Hungary': 7.0,

  // I, J, K
  'Iceland': 9.4,
  'India': 3.6,
  'Indonesia': 4.2,
  'Iran': 4.0,
  'Iraq': 3.5,
  'Ireland': 9.4,
  'Isle of Man': 9.0,
  'Israel': 9.0,
  'Italy': 8.6,
  'Jamaica': 4.4,
  'Japan': 9.5,
  'Jersey': 9.2,
  'Jordan': 3.9,
  'Kazakhstan': 5.0,
  'Kenya': 2.4,
  'Kiribati': 2.3,
  'North Korea': 1.3,
  'South Korea': 9.0,
  'Kosovo': 3.8,
  'Kuwait': 8.6,
  'Kyrgyzstan': 2.8,

  // L, M
  'Laos': 2.7,
  'Latvia': 7.2,
  'Lebanon': 3.2,
  'Lesotho': 2.0,
  'Liberia': 1.5,
  'Libya': 3.2,
  'Liechtenstein': 10.0,
  'Lithuania': 7.6,
  'Luxembourg': 10.0,
  'Macau': 9.0,
  'Madagascar': 1.7,
  'Malawi': 1.6,
  'Malaysia': 6.2,
  'Maldives': 5.2,
  'Mali': 1.7,
  'Malta': 8.0,
  'Marshall Islands': 3.0,
  'Martinique': 6.5,
  'Mauritania': 2.1,
  'Mauritius': 5.6,
  'Mayotte': 3.0,
  'Mexico': 5.6,
  'Micronesia': 3.0,
  'Moldova': 3.5,
  'Monaco': 10.0,
  'Mongolia': 3.6,
  'Montenegro': 4.8,
  'Montserrat': 4.5,
  'Morocco': 3.2,
  'Mozambique': 1.7,
  'Myanmar (Burma)': 2.0,

  // N, O, P, Q
  'Namibia': 3.4,
  'Nauru': 3.0,
  'Nepal': 2.3,
  'Netherlands': 9.2,
  'New Caledonia': 6.8,
  'New Zealand': 8.8,
  'Nicaragua': 3.4,
  'Niger': 1.4,
  'Nigeria': 2.4,
  'Niue': 3.0,
  'North Macedonia': 4.4,
  'Northern Mariana Islands': 6.2,
  'Norway': 9.8,
  'Oman': 7.6,
  'Pakistan': 2.6,
  'Palau': 4.2,
  'Panama': 6.0,
  'Papua New Guinea': 2.7,
  'Paraguay': 4.0,
  'Peru': 4.8,
  'Philippines': 3.8,
  'Pitcairn Island': 3.0,
  'Poland': 7.2,
  'Portugal': 8.0,
  'Puerto Rico': 6.4,
  'Qatar': 9.8,

  // R, S
  'Réunion': 6.5,
  'Reunion':6.5,
  'Romania': 6.4,
  'Russia': 5.6,
  'Rwanda': 2.1,
  'Saint Helena': 3.0,
  'Saint Kitts and Nevis': 5.2,
  'Saint Lucia': 4.8,
  'Saint-Pierre and Miquelon': 6.5,
  'Saint Vincent and the Grenadines': 4.6,
  'Samoa': 3.2,
  'San Marino': 8.8,
  'Sao Tome and Principe': 2.1,
  'Saudi Arabia': 8.2,
  'Senegal': 2.0,
  'Serbia': 4.8,
  'Seychelles': 5.6,
  'Sierra Leone': 1.6,
  'Singapore': 10.0,
  'Sint Maarten': 7.0,
  'Slovakia': 7.2,
  'Slovenia': 7.6,
  'Solomon Islands': 2.3,
  'Somalia': 1.0,
  'South Africa': 4.8,
  'Spain': 8.4,
  'Sri Lanka': 3.4,
  'South Sudan': 1.0,
  'Sudan': 1.8,
  'Suriname': 3.8,
  'Sweden': 9.3,
  'Switzerland': 10.0,
  'Syria': 1.8,

  // T, U, V, W, Y, Z
  'Taiwan': 8.4,
  'Tajikistan': 2.2,
  'Tanzania': 2.2,
  'Thailand': 5.0,
  'Togo': 1.9,
  'Tokelau': 2.8,
  'Tonga': 3.2,
  'Trinidad and Tobago': 5.6,
  'Tunisia': 3.4,
  'Turkey': 5.8,
  'Turkmenistan': 3.4,
  'Tuvalu': 2.8,
  'Turks and Caicos Islands': 7.0,
  'Uganda': 1.8,
  'Ukraine': 3.2,
  'United Arab Emirates': 9.4,
  'United Kingdom': 9.3,
  'United States': 9.8,
  'United States Virgin Islands': 6.8,
  'Uruguay': 6.2,
  'Uzbekistan': 3.2,
  'Vanuatu': 2.8,
  'Vatican City': 9.0,
  'Venezuela': 2.8,
  'Vietnam': 4.0,
  'Wallis and Futuna': 3.2,
  'West Bank': 2.2,
  'Western Sahara': 1.4,
  'Yemen': 1.5,
  'Zambia': 2.2,
  'Zimbabwe': 2.1,
}


export function getZetaForCountry(country: string): number {
  if (!country) return 5
  const normalized = country.trim().toLowerCase()
  const entry = Object.entries(ZETA_BY_COUNTRY).find(
    ([name]) => name.toLowerCase() === normalized
  )
  if (entry) return entry[1]
  // Fallback mid-value if we don’t know the country yet
  return 5
}

function interpolatePrice(min: number, max: number, zeta: number): number {
  const clamped = Math.max(1, Math.min(10, zeta))
  const t = (clamped - 1) / 9 // 0 → zeta=1, 1 → zeta=10
  const value = min + (max - min) * t
  return Math.floor(value)
}

export function calculateSemesterPrice(size: SchoolSize, zeta: number): number | null {
  if (size === 'very-large') return null

  switch (size) {
    case 'small': // S = [2000, 7000]
      return interpolatePrice(2000, 7000, zeta)
    case 'medium': // M = [3000, 9000]
      return interpolatePrice(3000, 9000, zeta)
    case 'large': // L = [4000, 12500]
      return interpolatePrice(4000, 12500, zeta)
    default:
      return null
  }
}

export function calculateFullPricing(size: SchoolSize, zeta: number) {
  const semester = calculateSemesterPrice(size, zeta)
  if (semester == null) {
    return { semester: null, month: null, year: null }
  }

  const month = Math.floor(semester / 1.8)
  const year = Math.floor(semester * 1.7) // ≈ 30% discount vs paying per semester

  return { semester, month, year }
}
