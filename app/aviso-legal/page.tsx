import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Health-Control - Información legal sobre el uso del sitio web.',
  openGraph: {
    title: 'Aviso Legal | Health-Control',
    description: 'Aviso legal de Health-Control - Información legal sobre el uso del sitio web.',
    url: 'https://health-control.es/aviso-legal',
  },
}

export default function AvisoLegalPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#1c3557] dark:text-[#f7f3ec]">
        Aviso Legal
      </h1>

      <div className="space-y-8 text-[#1c3557]/90 dark:text-[#f7f3ec]/90">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">1. Información General</h2>
          <p className="leading-relaxed">
            Este sitio web es propiedad de <strong>Health Control-Pain Relief BCN</strong>, con domicilio social en Barcelona, España.
            A través de este sitio web se facilita a los usuarios información sobre nuestros servicios de osteopresión y tratamientos de salud.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">2. Condiciones de Uso</h2>
          <p className="leading-relaxed mb-4">
            El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
          </p>
          <p className="leading-relaxed mb-4">
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Health-Control ofrece a través de su sitio web y a no emplearlos para:
          </p>
          <ul className="list-disc pl-8 space-y-2 leading-relaxed">
            <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
            <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
            <li>Provocar daños en los sistemas físicos y lógicos de Health-Control, de sus proveedores o de terceras personas.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">3. Propiedad Intelectual e Industrial</h2>
          <p className="leading-relaxed">
            Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad de Health-Control o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">4. Protección de Datos Personales</h2>
          <p className="leading-relaxed mb-4">
            Health-Control se compromete al cumplimiento de la normativa vigente en materia de protección de datos personales, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas en el Reglamento General de Protección de Datos (RGPD) y en la Ley Orgánica de Protección de Datos (LOPD).
          </p>
          <p className="leading-relaxed">
            Los datos personales recogidos a través del formulario de contacto serán tratados de forma confidencial y serán incorporados a la correspondiente actividad de tratamiento titularidad de Health-Control.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">5. Exclusión de Responsabilidad</h2>
          <p className="leading-relaxed mb-4">
            Health-Control no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
          </p>
          <ul className="list-disc pl-8 space-y-2 leading-relaxed">
            <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web y/o de sus servicios y contenidos.</li>
            <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
            <li>El uso ilícito, negligente, fraudulento o contrario al presente Aviso Legal.</li>
            <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">6. Información Médica</h2>
          <p className="leading-relaxed">
            La información contenida en este sitio web tiene carácter meramente informativo y en ningún caso sustituye el asesoramiento médico profesional. 
            Los tratamientos de osteopresión deben ser realizados por profesionales cualificados. Ante cualquier duda, consulte con su médico.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">7. Modificaciones</h2>
          <p className="leading-relaxed">
            Health-Control se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, 
            pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-[#d4a745]">8. Legislación Aplicable y Jurisdicción</h2>
          <p className="leading-relaxed">
            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del acceso o uso de este sitio web, 
            las partes se someten expresamente a los Juzgados y Tribunales de Barcelona, España.
          </p>
        </section>

        <section className="pt-8 border-t border-[#d4a745]/30">
          <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/70">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </main>
  )
}
