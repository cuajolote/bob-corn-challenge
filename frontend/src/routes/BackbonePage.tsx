import React, { useEffect } from 'react';
import BuyCornModel from '../backbone/models/BuyCornModel';
import { Navbar } from '../components/Navbar/Navbar';
import { BuyCornView } from '../backbone/views/BuyCornView';

export function BackbonePage() {
  useEffect(() => {
    const model = new BuyCornModel();
    const view = new BuyCornView({ model });
    view.render();

    document.getElementById('backbone-container')?.appendChild(view.el);

    return () => {
      view.remove(); // cleanup
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen items-center justify-center p-4 gap-4 bg-gray-100">
        <div id="backbone-container"></div>
      </div>
    </>
  );
}
