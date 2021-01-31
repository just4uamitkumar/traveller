import React, { useState, useEffect } from 'react';
import ReadMore from './Shared/ReadMore';

const Flight = () => {
  const pageTitle = 'Flights';
  const [flightData, setFlightData] = useState<any[]>([]);

  useEffect(() => {
    fetch('./FlightContent.json')
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        for (let i = 0; i < data2.length; i++) {
          data2[i].isExpanded = false;
        }
        setFlightData(data2);
      });
  }, []);

  const explore = (index: number) => {
    let arr = [...flightData];
    let item = arr[index];
    item.isExpanded = !item.isExpanded;
    setFlightData(arr);
  };

  return (
    <main>
      <div className="pageContent">
        <section className="pageHeader">
          <div className="container">
            <h1>{pageTitle}</h1>
          </div>
        </section>

        <div className="container">
          <section className="contentBlock">
            <h2>Flights Detail</h2>

            {flightData.map((e, index) => (
              <div className="blockCont" key={index}>
                <ReadMore
                  imgUrl={e.imgUrl}
                  name={e.name}
                  isExpanded={e.isExpanded}
                  descrip={e.descrip}
                  explore={() => explore(index)}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Flight;
