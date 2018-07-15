import SingleCountryStore from './SingleCountry';
import CountriesListStore from './CountriesList';
import CountryCreationStore from './CountryCreation';
import CountryDeletingStore from './CountryDeleting';
import ModalsStore from './Modals';
import ConfirmationModal from './ConfirmationModal';

export default ({
  singleCountry: SingleCountryStore,
  countriesList: CountriesListStore,
  countryCreation: CountryCreationStore,
  countryDeleting: CountryDeletingStore,
  modals: ModalsStore,
  confirmationModal: ConfirmationModal,
});
