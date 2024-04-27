const SidebarComponent = () => {
  return (
    <aside className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Menú</h2>
        <button className="block lg:hidden focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className="mt-4">
        <li><a href="/" className="block py-2">Inicio</a></li>
        <li><a href="/acerca" className="block py-2">Acerca</a></li>
        <li><a href="/contacto" className="block py-2">Contacto</a></li>
      </ul>
    </aside>
  );
};

export default SidebarComponent;
