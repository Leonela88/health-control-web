import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal y Política de Privacidad',
  description:
    'Información legal, condiciones de uso y política de privacidad de Health-Control.',
  openGraph: {
    title: 'Aviso Legal y Privacidad | Health-Control',
    description:
      'Información legal, condiciones de uso y política de privacidad de Health-Control.',
    url: 'https://health-control.es/aviso-legal',
  },
}

export default function AvisoLegalPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#1c3557] dark:text-[#f7f3ec]">
        Aviso Legal y Política de Privacidad
      </h1>

      <div className="space-y-8 text-[#1c3557]/90 dark:text-[#f7f3ec]/90">
        {/* 1. Información General */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            1. Información General
          </h2>
          <p className="leading-relaxed mb-3">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
            informa que el presente sitio web es propiedad y está gestionado por:
          </p>
          <ul className="list-disc pl-8 space-y-1 leading-relaxed">
            <li>
              <strong>Titular:</strong> Health Control - Pain Relief BCN
            </li>
            <li>
              <strong>Zona de actuación:</strong> Barcelona, Maresme y Vallès Oriental
            </li>
            <li>
              <strong>Email de contacto:</strong> contact@health-control.es
            </li>
          </ul>
        </section>

        {/* 2. Información sobre los Servicios */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            2. Información sobre los Servicios
          </h2>
          <p className="leading-relaxed mb-4">
            Los servicios ofrecidos en esta página web se desarrollan exclusivamente en el
            ámbito del movimiento, la educación corporal, la liberación de tensión fascial y
            el bienestar integral. Las sesiones tienen un carácter educativo y preventivo,
            y están orientadas a mejorar la movilidad, la conciencia corporal, la relajación
            y la calidad de vida mediante ejercicios, técnicas manuales de presión
            y orientación en hábitos saludables.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Aviso sobre la naturaleza no sanitaria:</strong> Estos servicios no constituyen
            actos médicos, fisioterapéuticos ni sanitarios, ni sustituyen la valoración, el
            diagnóstico o el tratamiento realizado por médicos, fisioterapeutas u otros
            profesionales sanitarios legalmente habilitados.
          </p>
          <ul className="list-disc pl-8 space-y-2 leading-relaxed">
            <li>
              Durante las sesiones no se realizan diagnósticos médicos ni se interpretan pruebas
              diagnósticas (como radiografías o resonancias), ni se prescriben medicamentos.
            </li>
            <li>
              Los resultados pueden variar en función de las circunstancias individuales de cada persona.
              No se garantizan resultados concretos ni la desaparición completa del dolor.
            </li>
            <li>
              Si presentas dolor agudo, patologías previas o un estado de salud delicado, debes
              consultar con un profesional sanitario antes de iniciar las sesiones.
            </li>
            <li>
              La participación en las sesiones es voluntaria y cada usuario es responsable de
              adaptar las indicaciones a sus propias capacidades físicas.
            </li>
          </ul>
        </section>

        {/* 3. Condiciones de Uso */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            3. Condiciones de Uso
          </h2>
          <p className="leading-relaxed mb-4">
            El acceso y uso de este sitio web atribuye la condición de usuario y supone la
            aceptación plena de todas las condiciones aquí expuestas. El usuario se compromete a
            hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas,
            fraudulentas o que atenten contra los derechos de terceros.
          </p>
        </section>

        {/* 4. Propiedad Intelectual e Industrial */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            4. Propiedad Intelectual e Industrial
          </h2>
          <p className="leading-relaxed">
            Todos los contenidos del sitio web (textos, estructuras, logotipos, imágenes, diseño
            gráfico y código fuente) son propiedad de Health Control - Pain Relief BCN o de
            terceros que han autorizado su uso, quedando prohibida su reproducción, distribución
            o transformación sin autorización expresa.
          </p>
        </section>

        {/* 5. Protección de Datos Personales (RGPD / LOPD-GDD) */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            5. Protección de Datos Personales
          </h2>
          <p className="leading-relaxed mb-3">
            En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679)
            y la Ley Orgánica 3/2018 (LOPD-GDD), se informa sobre el tratamiento de tus datos:
          </p>
          <ul className="list-disc pl-8 space-y-2 leading-relaxed">
            <li>
              <strong>Responsable:</strong> Health Control - Pain Relief BCN
            </li>
            <li>
              <strong>Finalidad:</strong> Atender y gestionar las consultas recibidas a través
              del formulario de contacto o canales de comunicación.
            </li>
            <li>
              <strong>Legitimación:</strong> Consentimiento del interesado al enviar la consulta.
            </li>
            <li>
              <strong>Conservación:</strong> Los datos se conservarán durante el tiempo necesario
              para atender la consulta o relación comercial derivada.
            </li>
            <li>
              <strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal.
            </li>
            <li>
              <strong>Derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación,
              supresión, limitación y oposición enviando un email a contact@health-control.es.
              Asimismo, tienes derecho a reclamar ante la Agencia Española de Protección de Datos
              (aepd.es).
            </li>
          </ul>
        </section>

        {/* 6. Exclusión de Responsabilidad */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            6. Exclusión de Responsabilidad
          </h2>
          <p className="leading-relaxed mb-4">
            Health Control - Pain Relief BCN no se hace responsable de los daños y perjuicios de
            cualquier naturaleza que pudieran derivarse de:
          </p>
          <ul className="list-disc pl-8 space-y-2 leading-relaxed">
            <li>
              La falta de disponibilidad técnica, caídas de servidor o errores de funcionamiento del sitio web.
            </li>
            <li>
              La presencia de virus o programas maliciosos introducidos por terceros.
            </li>
            <li>
              El uso indebido o ilícito que los usuarios puedan hacer de los contenidos facilitados.
            </li>
          </ul>
        </section>

        {/* 7. Modificaciones */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            7. Modificaciones
          </h2>
          <p className="leading-relaxed">
            Health Control - Pain Relief BCN se reserva el derecho de efectuar sin previo aviso
            las modificaciones que considere oportunas en este sitio web, pudiendo cambiar, suprimir
            o añadir tanto contenidos y servicios como este propio aviso legal.
          </p>
        </section>

        {/* 8. Legislación Aplicable y Jurisdicción */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">
            8. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="leading-relaxed">
            Las presentes condiciones se rigen por la legislación española. Para la resolución de
            cualquier conflicto o controversia derivada del uso de esta web o de sus servicios,
            las partes se someten a los Juzgados y Tribunales de Barcelona, España.
          </p>
        </section>

        {/* Fecha de actualización */}
        <section className="pt-8 border-t border-[#d4a745]/30">
          <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/70">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </main>
  )
}