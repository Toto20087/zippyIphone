
import CardHorizontal from './CardHorizontal';

const Features = () => {

  return (
    <section className="h-full common-padding bg-[#0099FF] relative overflow-hidden flex items-center justify-center flex-col">
      <h2 className='text-3xl md:text-6xl font-bold text-center text-[#FFFFFF] tracking-tighter pb-10'>BENEFICIOS</h2>
      <div className="lg:w-[70%] md:w-[70%] w-full flex items-center justify-center flex-wrap gap-x-10 gap-y-10">
        <CardHorizontal 
        text="Desarrolla Competencias Clave en niños, niñas y jóvenes"
        hoverText="Nuestras propuestas de educación tecnológica desarrollan habilidades prácticas y emocionales esenciales para su futuro: Colaboración
        Creatividad
        Comunicación
        "
        />
        <CardHorizontal 
        text="Forma Ciudadanos Digitales Responsables"
        hoverText="Procuramos que los niños y niñas se conviertan en ciudadanos digitales respetuosos. Aseguramos que aprendan a navegar el mundo online de manera segura y equilibrada."
        />
        <CardHorizontal 
        text="Convierte a tu Escuela en Referente de Innovación"
        hoverText="Mantenemos actualizados los contenidos, incorporando nuevos módulos que acompañan la evolución de la tecnología. Te ayudamos a comunicar a madres y padres las innovaciones de tu institución."
        />
        <CardHorizontal 
        text="Mantén a tus Docentes Confiados y Motivados"
        hoverText="Brindamos soporte y acompañamiento continuo para el abordaje de ejes temáticos, actividades prácticas y el uso de herramientas digitales. Hacemos que enseñar sea simple."
        />
      </div>
    </section>
  )
}

export default Features