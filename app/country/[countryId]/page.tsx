import Header from '@/components/Header/Header'
import countriesServices from '../../../services/countries'
import CountryDetail from '@/components/CountryDetail/CountryDetail'

interface PageProps {
  params: { countryId: string };
}

const CountryPage: React.FC<PageProps> = async ({ params }) => {
  const { countryId } = params;

  const countryData = await countriesServices.fetchCountry({ countryId });

  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue-bg min-h-screen">
      <Header />
      <main className="container p-6">
        <CountryDetail country={countryData} />
      </main>
    </div>
  );
};

export default CountryPage;