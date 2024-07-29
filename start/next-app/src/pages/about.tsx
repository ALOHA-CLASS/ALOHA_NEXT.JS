import MainLayout from './main-layout';

const AboutPage: React.FC = () => {

  return (
    <MainLayout>
      <main className="flex-1 flex items-start justify-center bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">About</h2>
        </div>
      </main>
    </MainLayout>
  );
};

export default AboutPage
