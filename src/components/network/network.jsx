import React, { useState, useEffect } from 'react';

export default function ConnectionInfo() {
  const [coords, setCoords] = useState({ lat: 'Loading...', lon: 'Loading...' });
  const [network, setNetwork] = useState({ type: 'Loading...', speed: 'Loading...' });

  // Inline styles
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      padding: '20px',
      background: '#f4f4f4',
      minHeight: '100vh',
    },
    card: {
      background: 'rgb(22, 102, 143)',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '40px auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      color: '#fff',
    },
    title: {
      textAlign: 'center',
      marginBottom: '16px',
    },
    label: {
      fontWeight: 'bold',
    },
    value: {
      marginLeft: '4px',
    },
  };

  // Geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      setCoords({ lat: 'Not Supported', lon: 'Not Supported' });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude.toFixed(6),
          lon: position.coords.longitude.toFixed(6),
        });
      },
      (error) => {
        setCoords({ lat: 'Error', lon: error.message });
      }
    );
  }, []);

  // Network Info
  useEffect(() => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;

    const updateConnectionInfo = () => {
      if (!connection) {
        setNetwork({ type: 'Not Supported', speed: 'N/A' });
      } else {
        setNetwork({ type: connection.effectiveType, speed: connection.downlink });
      }
    };

    updateConnectionInfo();
    if (connection) {
      connection.addEventListener('change', updateConnectionInfo);
      return () => connection.removeEventListener('change', updateConnectionInfo);
    }
  }, []);

  return (
    // <div style={styles.container}>
    //   <div style={styles.card}>
    //     <h2 style={styles.title}>Know Your Connection</h2>
    //     <p>
    //       <span style={styles.label}>Latitude:</span>
    //       <span style={styles.value}>{coords.lat}</span>
    //     </p>
    //     <p>
    //       <span style={styles.label}>Longitude:</span>
    //       <span style={styles.value}>{coords.lon}</span>
    //     </p>
    //     <p>
    //       <span style={styles.label}>Network Type:</span>
    //       <span style={styles.value}>{network.type}</span>
    //     </p>
    //     <p>
    //       <span style={styles.label}>Download Speed:</span>
    //       <span style={styles.value}>{network.speed} Mbps</span>
    //     </p>
    //   </div>
    // </div>
    <div className='w-full h-[98%] bg-black flex items-center justify-center'>
      <div className='w-1/2 h-full flex flex-col'>
        <div className="w-full h-auto pl-2 pr-2 pb-0 mb-0 text-9xl flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">GEO</div>
        <div className="w-full h-auto pl-1 pr-1 pt-0 mt-0 mb-1 text-8xl flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800">LOCATION</div>
        <br />
        <br />
        <div className='w-full h-auto flex items-center justify-center'>
          <div className='relative rounded m-2 w-1/2 h-32'>
            <div className='bg-gray-500 w-full h-full absolute opacity-40 rounded'></div>
            <div className='p-2 relative w-full h-full rounded shadow-lg hover:shadow-red-400'>
            <div className='font-bold absolute opacity-60 text-xl h-full tracking-normal hover:tracking-wider transition-all duration-300 hover:text-red-500 pl-1 w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Latitude</div>
              <div className="w-full mt-2 sm:mt-0 h-full flex items-center justify-between">
                <div className="flex text-3xl items-center justify-center">
                  {coords.lat}
                </div>
              </div>
            </div>
          </div>
          <div className='relative rounded m-2 w-1/2 h-32'>
            <div className='bg-gray-500 w-full h-full absolute opacity-40 rounded'></div>
            <div className='p-2 relative w-full h-full rounded shadow-lg hover:shadow-red-400'>
            <div className='font-bold absolute opacity-60 text-xl h-full tracking-normal hover:tracking-wider transition-all duration-300 hover:text-red-500 pl-1 w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Longitude</div>
              <div className="w-full mt-2 sm:mt-0 h-full flex items-center justify-between">
                <div className="flex text-3xl items-center justify-center">
                  {coords.lon}
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className='w-1/2 h-full'>
        <div className="w-full h-auto pl-2 pr-2 pb-0 mb-0 text-9xl flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">NET</div>
        <div className="w-full h-auto pl-1 pr-1 pt-0 mt-0 mb-1 text-8xl flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800">WORK</div>
        <br />
        <br />
        <div className='w-full h-auto flex items-center justify-center'>
          <div className='relative rounded m-2 w-1/2 h-32'>
            <div className='bg-gray-500 w-full h-full absolute opacity-40 rounded'></div>
            <div className='p-2 relative w-full h-full rounded shadow-lg hover:shadow-red-400'>
            <div className='font-bold absolute opacity-60 text-xl h-full tracking-normal hover:tracking-wider transition-all duration-300 hover:text-red-500 pl-1 w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Network Type</div>
              <div className="w-full mt-2 sm:mt-0 h-full flex items-center justify-between">
                <div className="flex text-3xl items-center justify-center">
                  {network.type}
                </div>
              </div>
            </div>
          </div>
          <div className='relative rounded m-2 w-1/2 h-32'>
            <div className='bg-gray-500 w-full h-full absolute opacity-40 rounded'></div>
            <div className='p-2 relative w-full h-full rounded shadow-lg hover:shadow-red-400'>
            <div className='font-bold absolute opacity-60 text-xl h-full tracking-normal hover:tracking-wider transition-all duration-300 hover:text-red-500 pl-1 w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Download Speed</div>
              <div className="w-full mt-2 sm:mt-0 h-full flex items-center justify-between">
                <div className="flex text-3xl items-center justify-center">
                  {network.speed} Mbps
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
