import HomeButton from '../components/HomeButton';
import OfferSection from '../components/OfferSection';
import { useTreatmentsQuery } from '../generated/graphql';
import { Payload } from '../helpclasses/interfaces';

const Offer = () => {
  const { data } = useTreatmentsQuery({
    ssr: true,
  });

  // devide servises to sections
  const sections = new Map<string, Payload[]>();

  data?.treatments.forEach(({ section, price, title, description }) => {
    if (sections.has(section)) {
      const payload: Payload[] = sections.get(section)!;
      payload.push({ price, title, description });
      sections.set(section, payload);
    } else {
      sections.set(section, [{ price, title, description }]);
    }
  });
  return (
    <>
      <HomeButton />
      <section className='flex items-center p-4 flex-col gap-4'>
        {
          // for each section create OfferSection component
          Array.from(sections).map(([key, payloadArray]) => (
            <OfferSection
              key={key}
              sectionTitle={key}
              payloadArray={payloadArray}
            />
          ))
        }
      </section>
    </>
  );
};

export default Offer;
