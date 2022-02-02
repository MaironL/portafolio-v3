import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h2 style={{ gridArea: 'main' }}>Pagina no encontrada</h2>
    </>
  );
};

export default Error;
