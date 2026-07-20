'use client'

import { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface LegalNoticeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept: () => void
}

export default function LegalNoticeModal({ open, onOpenChange, onAccept }: LegalNoticeModalProps) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset scroll state when modal opens
    if (open) {
      setHasScrolledToBottom(false)
    }
  }, [open])

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    // Check if user has scrolled to the bottom (with 10px threshold)
    const isAtBottom = 
      container.scrollHeight - container.scrollTop - container.clientHeight < 10

    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true)
    }
  }

  const handleAccept = () => {
    onAccept()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec]">
            Aviso Legal
          </DialogTitle>
        </DialogHeader>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto pr-4 space-y-4 text-sm text-[#1c3557]/90 dark:text-[#f7f3ec]/90 leading-relaxed"
        >
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">1. Información General</h3>
            <p>
              Este sitio web es propiedad de <strong>Health Control-Pain Relief BCN</strong>, con domicilio social en Barcelona, España.
              A través de este sitio web se facilita a los usuarios información sobre nuestros servicios de osteopresión y tratamientos de salud.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">2. Condiciones de Uso</h3>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
            <p className="mt-2">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Health-Control ofrece a través de su sitio web y a no emplearlos para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de Health-Control, de sus proveedores o de terceras personas.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">3. Propiedad Intelectual e Industrial</h3>
            <p>
              Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad de Health-Control o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">4. Protección de Datos Personales</h3>
            <p>
              Health-Control se compromete al cumplimiento de la normativa vigente en materia de protección de datos personales, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas en el Reglamento General de Protección de Datos (RGPD) y en la Ley Orgánica de Protección de Datos (LOPD).
            </p>
            <p className="mt-2">
              Los datos personales recogidos a través del formulario de contacto serán tratados de forma confidencial y serán incorporados a la correspondiente actividad de tratamiento titularidad de Health-Control.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">5. Exclusión de Responsabilidad</h3>
            <p>
              Health-Control no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web y/o de sus servicios y contenidos.</li>
              <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
              <li>El uso ilícito, negligente, fraudulento o contrario al presente Aviso Legal.</li>
              <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">6. Información Médica</h3>
            <p>
              La información contenida en este sitio web tiene carácter meramente informativo y en ningún caso sustituye el asesoramiento médico profesional. 
              Los tratamientos de osteopresión deben ser realizados por profesionales cualificados. Ante cualquier duda, consulte con su médico.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">7. Modificaciones</h3>
            <p>
              Health-Control se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, 
              pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">8. Legislación Aplicable y Jurisdicción</h3>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del acceso o uso de este sitio web, 
              las partes se someten expresamente a los Juzgados y Tribunales de Barcelona, España.
            </p>
          </section>

          <section className="pb-4">
            <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70 mt-4">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>

        <DialogFooter className="mt-4">
          <Button
            onClick={handleAccept}
            disabled={!hasScrolledToBottom}
            className="bg-[#1c3557] hover:bg-[#2a4a70] dark:bg-[#d4a745] dark:hover:bg-[#c19639] text-[#f7f3ec] dark:text-[#1c3557] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {hasScrolledToBottom ? 'Aceptar' : 'Desplázate hasta el final'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
