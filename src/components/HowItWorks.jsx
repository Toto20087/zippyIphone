
import CustomCard from './CardIlustraciones';
import CardAmarilla from './CardAmarilla';
import CardNaranja from './CardNaranja';

const HowItWorks = () => {

  return (
    <section className='common-padding bg-[#F5F5F5] flex items-center justify-center flex-col gap-y-10 bg-[url("/bgEjes.png")] bg-no-repeat bg-contain bg-center '>
      <h2 className="hiw-title">
        EJES TEMATICOS
      </h2>
      <div className="screen-max-width flex items-center justify-center flex-col gap-y-5">
        <CustomCard />
        <CardAmarilla />
        <CardNaranja />
      </div>
    </section>
  )
}

export default HowItWorks