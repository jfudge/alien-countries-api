import CountryDetail from "@/components/CountryDetail/CountryDetail";
import Header from "@/components/Header/Header";
import { Country } from "@/interfaces";
import countriesServices from "../../../services/countries";

interface CountryPageProps {
  params: {
    countryId: string;
  };
}

// Function to generate static params
export async function generateStaticParams() {
  const { data: countries } = await countriesServices.fetchAllCountries();
  return countries.map((country: Country) => ({
    countryId: country.cca3,
  }));
}

// Page component
const CountryPage = async ({ params }: CountryPageProps) => {
  const { countryId } = params;
  const countryData: Country = await countriesServices.fetchCountry({
    countryId,
  });

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

