export type SchoolSize = 'small' | 'medium' | 'large' | 'very-large'

export function mapSchoolSizeToCapacity(size: SchoolSize | ''): string {
  switch (size) {
    case 'small':
      return 'up to 500 students'
    case 'medium':
      return 'up to 1,000 students'
    case 'large':
      return 'up to 3,000 students'
    case 'very-large':
      return 'over 3,000 students (university scale)'
    default:
      return 'appropriate capacity based on your institution profile'
  }
}