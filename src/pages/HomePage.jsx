import MedicationList from '../components/MedicationList';

const HomePage = () => {
  return (
    <div>
      {/* Aquí Navbar */}
      <main>
        <h1>Bienvenida a CronoSana</h1>
        <MedicationList />
      </main>
    </div>
  );
};

export default HomePage;
