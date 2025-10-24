import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary Root layout component for the application
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @routing
 * - Wraps all application routes
 * - Provides consistent structure
 *
 * @layout
 * - Header: Application header
 * - Main: Page content area
 * - Footer: Application footer
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-adventure-blue to-adventure-purple">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-adventure-blue font-adventure">
            Quiz de Hora de Aventura
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          <p>© 2024 Quiz de Hora de Aventura. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
