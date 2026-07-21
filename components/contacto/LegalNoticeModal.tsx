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
            Aviso Legal y Política de Privacidad
          </DialogTitle>
        </DialogHeader>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto pr-4 space-y-4 text-sm text-[#1c3557]/90 dark:text-[#f7f3ec]/90 leading-relaxed"
        >
          {/* 1. Información General */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">1. Información General</h3>
            <p>
              En cumplimiento de la LSSI-CE, se informa que este sitio web es gestionado por:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><strong>Titular:</strong> Health Control - Pain Relief BCN</li>
              <li><strong>Zona de actuación:</strong> Barcelona, Maresme y Vallès Oriental</li>
              <li><strong>Email:</strong> contact@health-control.es</li>
            </ul>
          </section>

          {/* 2. Información sobre los Servicios */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">2. Información sobre los Servicios</h3>
            <p>
              Los servicios se desarrollan exclusivamente en el ámbito del movimiento, la educación corporal, la liberación de tensión fascial y el bienestar integral, teniendo un carácter educativo y preventivo.
            </p>
            <p className="mt-2 font-medium">
              Aviso sobre la naturaleza no sanitaria:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>No constituyen actos médicos, fisioterapéuticos ni sanitarios, ni sustituyen diagnósticos o tratamientos oficiales.</li>
              <li>No se realizan diagnósticos ni se prescriben medicamentos.</li>
              <li>Los resultados varían individualmente; no se garantiza la desaparición total del dolor.</li>
              <li>Ante dolor agudo o patologías previas, debes consultar a un profesional sanitario.</li>
            </ul>
          </section>

          {/* 3. Condiciones de Uso */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">3. Condiciones de Uso</h3>
            <p>
              El acceso a esta web le atribuye la condición de usuario, comprometiéndose a un uso adecuado de los contenidos y a abstenerse de realizar actividades ilícitas, lesionar derechos de terceros o intentar dañar los sistemas de la web.
            </p>
          </section>

          {/* 4. Propiedad Intelectual e Industrial */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">4. Propiedad Intelectual e Industrial</h3>
            <p>
              Todos los contenidos (textos, gráficos, diseño y código) son propiedad de Health Control - Pain Relief BCN o de terceros autorizados. Queda prohibida su reproducción o distribución sin autorización previa.
            </p>
          </section>

          {/* 5. Protección de Datos Personales */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">5. Protección de Datos Personales</h3>
            <p>
              En virtud del RGPD y LOPD-GDD, los datos facilitados mediante el formulario serán tratados exclusivamente por Health Control - Pain Relief BCN para atender tus consultas. No se cederán datos a terceros salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación o supresión enviando un correo a contact@health-control.es.
            </p>
          </section>

          {/* 6. Exclusión de Responsabilidad */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">6. Exclusión de Responsabilidad</h3>
            <p>
              Health Control no se responsabiliza de daños ocasionados por caídas del servidor, fallos técnicos, virus o contenidos maliciosos de terceros, ni del uso indebido que los usuarios hagan de la información publicada.
            </p>
          </section>

          {/* 7. Modificaciones */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">7. Modificaciones</h3>
            <p>
              Nos reservamos el derecho de modificar el contenido de la web, de los servicios y del presente aviso legal en cualquier momento y sin previo aviso.
            </p>
          </section>

          {/* 8. Legislación Aplicable y Jurisdicción */}
          <section>
            <h3 className="font-semibold text-base mb-2 text-[#d4a745]">8. Legislación Aplicable y Jurisdicción</h3>
            <p>
              Estas condiciones se rigen por la legislación española. Cualquier controversia será sometida a los Juzgados y Tribunales de la ciudad de Barcelona, España.
            </p>
          </section>

          <section className="pb-2">
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