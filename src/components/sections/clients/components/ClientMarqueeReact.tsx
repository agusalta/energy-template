import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

interface Client {
  name: string;
}

interface Props {
  clients: Client[];
  direction?: "left" | "right";
}

const ClientMarqueeReact = ({ clients, direction = "left" }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <Marquee
        gradient={true}
        gradientColor={isDarkMode ? "rgb(26, 26, 26)" : "rgb(249, 249, 249)"}
        gradientWidth={100}
        speed={40}
        pauseOnHover={true}
        direction={direction}
        className="w-full bg-base dark:bg-base-dark [&_.marquee]:dark:!bg-[#1a1a1a]"
      >
        {clients.map((client, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
              <strong className='text-primary'>&bull;</strong> {client.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientMarqueeReact; 