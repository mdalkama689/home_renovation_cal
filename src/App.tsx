import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import { Home } from 'lucide-react';
import TabShare from './components/share/TabShare';
import MobileShare from './components/share/MobileShare';

function App() {
    const [deviceType, setDeviceType] = useState<"big" | "small">("big");

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(window.innerWidth < 1024 ? "small" : "big");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        {deviceType === "small" ? <MobileShare /> : <TabShare />}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="bg-blue-600 p-2 rounded-lg mr-3">
              <Home size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold">Home Renovation Calculator</h1>
          </div>
          <div className="text-sm text-gray-400">
            Plan your budget with precision
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3 text-blue-400">Estimate Your Renovation Costs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter the costs for each item to calculate your total renovation budget. 
            Adjust values as needed and download a detailed PDF estimate.
          </p>
        </div>

        <Calculator />
      </main>

    </div>
  );
}

export default App;