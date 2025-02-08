import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<div>Абракадабра</div>);
} else {
    console.error("Root element not found");
}