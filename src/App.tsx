import MuscadineBanner from './components/MuscadineBanner';
import HomeSite from './components/HomeSite';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MuscadineBanner />
      <main className="flex-1">
        <HomeSite />
      </main>
      {/* Remove MuscadineFooter here to avoid duplicate footers */}
    </div>
  );
}

export default App; 