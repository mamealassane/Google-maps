// GoogleMap.js
import React from 'react';

const Maps = () => (
  <div>
    <iframe
      title="Google Map"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7715.949949801642!2d-17.427454663863863!3d14.770439767292473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10cfa2873f98f%3A0x38a9d160b542ff91!2zQ2FtYsOpcsOobmUgMiwgRGFrYXI!5e0!3m2!1sfr!2ssn!4v1703119870128!5m2!1sfr!2ssn"
    ></iframe>
  </div>
);

export default Maps;
