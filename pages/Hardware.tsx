import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Cpu } from 'lucide-react';

const hardwareItems = [
  {
    name: 'Arduino Uno R3',
    image: 'https://cdn.roboticsbd.com/6316-large_default/arduino-uno-r3-robotics-bangladesh.jpg'
  },
  {
    name: 'MQ-2 Flammable Gas & Smoke Sensor',
    image: 'https://cdn.roboticsbd.com/1811-large_default/mq-2-flammable-gas-smoke-sensor-robotics-bangladesh.jpg'
  },
  {
    name: 'MQ-7 Carbon Monoxide Gas Sensor',
    image: 'https://cdn.roboticsbd.com/1816-large_default/mq-7-carbon-monoxide-gas-sensor-robotics-bangladesh.jpg'
  },
  {
    name: 'MQ-135 Gas Sensor',
    image: 'https://cdn.roboticsbd.com/1819-large_default/mq-135-gas-sensor-robotics-bangladesh.jpg'
  },
  {
    name: 'DHT11 Temperature And Humidity Sensor',
    image: 'https://cdn.roboticsbd.com/7780-large_default/dht11-temperature-and-humidity-sensor-module-robotics-bangladesh.jpg'
  },
  {
    name: 'Big Microphone Sound Sensor Module',
    image: 'https://cdn.roboticsbd.com/5347-large_default/big-microphone-sound-sensor-module-robotics-bangladesh.jpg'
  },
  {
    name: '16x2 Serial LCD Module Display for Arduino Assembled',
    image: 'https://cdn.roboticsbd.com/3190-large_default/16x2-serial-lcd-module-display-for-arduino-assembled-robotics-bangladesh.jpg'
  },
  {
    name: 'ESP8266 CH340 NodeMCU',
    image: 'https://cdn.roboticsbd.com/4926-large_default/esp8266-ch340-nodemcu-wifi-module-lua-v3-robotics-bangladesh.jpg'
  },
  {
    name: 'Mini MP3 and WAV File Player',
    image: 'https://cdn.roboticsbd.com/11633-large_default/mini-mp3-and-wav-file-player-robotics-bangladesh.jpg'
  },
  {
    name: '3 Watt 8 Ohm Mini Speaker',
    image: 'https://cdn.roboticsbd.com/6780-large_default/3-watt-8-ohm-mini-speaker-for-electronics-project-with-jst-ph20-interface-robotics-bangladesh.jpg'
  },
  {
    name: 'MicroSD Card Module',
    image: 'https://cdn.roboticsbd.com/8138-large_default/microsd-card-module-robotics-bangladesh.jpg'
  },
  {
    name: 'Breadboard',
    image: 'https://cdn.roboticsbd.com/1345-large_default/breadboard-full-size-bare-830-tie-points-robotics-bangladesh.jpg'
  },
  {
    name: 'Male to Male Jumper Wires',
    image: 'https://cdn.roboticsbd.com/7710-large_default/male-to-male-jumper-wires-20-pcs-20cm-robotics-bangladesh.jpg'
  },
  {
    name: 'Male to Female Jumper Wires',
    image: 'https://cdn.roboticsbd.com/7715-large_default/male-to-female-jumper-wires-20-pcs-20cm-robotics-bangladesh.jpg'
  }
];

const Hardware: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-16 md:space-y-24">
      
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-uni-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Cpu className="text-uni-accent w-8 h-8 md:w-12 md:h-12" />
            Hardware Components
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            The core physical components that power the IOT Smart Air Pollution Awareness Monitoring Detection System.
          </p>
        </motion.div>
      </div>

      {/* Hardware Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {hardwareItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 flex-grow flex items-center justify-center text-center border-t border-gray-100 dark:border-slate-700">
              <h3 className="font-bold text-sm md:text-base text-uni-900 dark:text-white group-hover:text-uni-accent transition-colors">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Circuit Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl"
      >
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-uni-900 dark:text-white mb-8 text-center">
          Circuit Diagram
        </h2>
        <div className="rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200 dark:border-slate-600 aspect-video md:aspect-[4/3] relative">
          <iframe 
            src="https://drive.google.com/file/d/1lAGXNYdfCTFfwN6SBgMOI2ES6A2zt5Nd/preview" 
            title="Circuit Diagram" 
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </motion.div>

      {/* Demo Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pb-10"
      >
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-uni-900 dark:text-white mb-6">
          Demo Video
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Watch the system in action below.
        </p>
        <div className="rounded-xl overflow-hidden bg-black shadow-2xl border border-gray-200 dark:border-slate-700 aspect-video relative max-w-4xl mx-auto">
          <iframe 
            src="https://drive.google.com/file/d/1AhnLADV7mQ4N8x3-EUmnvF-4WVdTS4pV/preview" 
            title="Demo Video"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </motion.div>

    </div>
  );
};


export default Hardware;
