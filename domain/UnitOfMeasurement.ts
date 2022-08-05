export type UnitOfMeasurementDto =
  'ML'
  | 'CL'
  | 'DL'
  | 'L'
  | 'G'
  | 'KG'
  | 'UNIT'
  | 'MM'
  | 'CM'
  | 'M'
  | 'TL'
  | 'EL'
  | 'PINCH'
  | 'CUP'
  | 'PINT'

const humanReadableUnits: Record<UnitOfMeasurementDto, string> = {
  'ML': 'millilitre',
  'CL': 'centilitre',
  'DL': 'decilitre',
  'L': 'litre',
  'G': 'gram',
  'KG': 'kilogram',
  'UNIT': 'unit',
  'MM': 'millimeter',
  'CM': 'centimeter',
  'M': 'meter',
  'TL': 'teaspoon',
  'EL': 'tablespoon',
  'PINCH': 'pinch',
  'CUP': 'cup',
  'PINT': 'pint',
}
export const mapUnitOfMeasurement = (dto: UnitOfMeasurementDto) => {
  return humanReadableUnits[dto];
}