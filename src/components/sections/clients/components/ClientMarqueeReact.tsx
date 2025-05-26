import React from 'react';
import Marquee from 'react-fast-marquee';

interface Client {
  name: string;
}

interface Props {
  clients: Client[];
}

const ClientMarqueeReact = ({ clients }: Props) => {
  return (
    <div className="w-full">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="w-full bg-base dark:bg-base-dark"
      >
        {clients.map((client, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {client.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientMarqueeReact; 