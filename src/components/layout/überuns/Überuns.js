import React from "react";

import img10 from "../../../sass/images/10.jpg";
// import img12 from "../../../sass/images/12.jpg";
// import img12_1 from "../../../sass/images/12_1.jpg";

const Überuns = () => {
  return (
    <div className="überuns">
      <div className="überuns__content">
        <div
          className="überuns__left"
          // style={{ background: `url(${img12})` }}
        >
          {/* <div className="überuns__frame" /> */}
          {/* <img src={img12_1} alt="slika" className="überuns__img" /> */}
        </div>
        <div className="überuns__right" style={{ background: `url(${img10})` }}>
          {/* <h1 className="überuns__h1">Über uns</h1> */}
          <span className="überuns__span">Geschäftsführer:</span>
          <h1 className="überuns__h1">Dejan Bogojevic</h1>
          <span className="überuns__span">
            staatl. geprüfter lmmobilienfachmann
          </span>
          <div className="überuns__p">
            <p>
              <i className="far fa-calendar-alt"></i> Jahrgang 1978
            </p>
            <p>
              <i className="fas fa-building"></i>geboren und aufgewachsen in
              Erlangen
            </p>
          </div>
          <span className="überuns__span">Beruflicher Werdegang:</span>
          <div className="überuns__p">
            <p>Realschule am Europakanal</p>
            <p>FOS Erlangen</p>
            <p>Ausbildung zum Bürokaufmann in der Baubranche</p>
            <p>
              Langjährige Tätigkeit als Projektkaufmann bei einem weltweit
              berühmten Baukonzem
            </p>
            <p>Weiterbildung zum staatlich gepruften lmmobilienfachmann</p>
            <p>Schwerpunkt: Entwicklung und Vermarktung von lmmobilien</p>
            <p>Seit 2007 erfolgreich am Erlanger lmmobilienmarkt tätig</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Überuns;
