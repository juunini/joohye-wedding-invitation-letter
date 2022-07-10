import AddressSection from './components/AddressSection';
import BankAccountSection from './components/BankAccountSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import WeddingDaySection from './components/WeddingDaySection';

export default function App(): JSX.Element {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <WeddingDaySection />
      <AddressSection />
      <BankAccountSection />
    </>
  );
}
