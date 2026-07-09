import { ServiceItem } from '@/lib/types'

export const services: ServiceItem[] = [
  {
    id: 'osteopatia',
    name: 'Osteopatía',
    shortDescription:
      'Tratamiento manual que trabaja sobre el sistema músculo-esquelético para restaurar el equilibrio y aliviar el dolor.',
    icon: 'Hand',
    available: true,
  },
  {
    id: 'presurologia',
    name: 'Presuroterapia',
    shortDescription:
      'Técnica de compresión neumática que mejora la circulación linfática y reduce la retención de líquidos.',
    icon: 'Wind',
    available: true,
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    shortDescription:
      'Rehabilitación física mediante ejercicios terapéuticos, electroterapia y técnicas manuales especializadas.',
    icon: 'Activity',
    available: true,
  },
  {
    id: 'acupuntura',
    name: 'Acupuntura',
    shortDescription:
      'Técnica milenaria de estimulación de puntos energéticos para aliviar el dolor crónico y mejorar el bienestar general.',
    icon: 'Zap',
    available: false,
  },
]
