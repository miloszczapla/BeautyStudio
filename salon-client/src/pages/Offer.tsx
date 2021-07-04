import HomeButton from '../components/HomeButton';
import OfferSection from '../components/OfferSection';
import { Payload } from '../helpclasses/interfaces';

interface Service {
  section: string;
  payload: Payload;
}
const Offer = () => {
  //TODO: fetch data from api
  const arrayOfOffers: Service[] = [
    {
      section: 'dermatologia',
      payload: {
        title: 'Peeling kawitacyjny',
        description:
          'Peeling kawitacyjny polega na... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sit diam nibh vitae risus etiam mi mattis. Metus auctor aenean quisque aenean non integer duis egestas in. Gravida duis blandit ante neque augue turpis.',
        price: 135,
      },
    },
    {
      section: 'trychologia',
      payload: {
        title: 'Badanie kontrolne',
        description: 'Badam to i owo',
        price: 35,
      },
    },
    {
      section: 'dermatologia',
      payload: {
        title: 'Darsonwal',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam ducimus. Illo, consequatur omnis nam a dolorum vel. Maiores officia veniam corporis ex temporibus voluptatibus nesciunt provident nemo porro ullam',
        price: 35,
      },
    },
    {
      section: 'dermatologia',
      payload: {
        title: 'Oczyszczanie skóry',
        description:
          'Peeling kawitacyjny polega na... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sit diam nibh vitae risus etiam mi mattis. Metus auctor aenean quisque aenean non integer duis egestas in. Gravida duis blandit ante neque augue turpis.',
        price: 65,
      },
    },
  ];

  // devide servises to sections
  const sections = new Map<string, Payload[]>();

  arrayOfOffers.forEach((service: Service) => {
    if (sections.has(service.section)) {
      const payload: Payload[] = sections.get(service.section)!;
      payload.push(service.payload);
      sections.set(service.section, payload);
    } else {
      sections.set(service.section, [service.payload]);
    }
  });
  return (
    <>
      <HomeButton />
      <section className='flex items-center p-4 flex-col gap-4'>
        {/* for each section create OfferSection component */}
        {Array.from(sections).map(([key, payloadArray]) => (
          <OfferSection
            key={key}
            sectionTitle={key}
            payloadArray={payloadArray}
          />
        ))}
      </section>
    </>
  );
};

export default Offer;
