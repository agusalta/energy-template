import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useThemeStore } from '../../../../store/themeStore';

interface Client {
  name: string;
}

interface Props {
  clients: Client[];
}

const ClientMarqueeReact = ({ clients }: Props) => {
  const { isDarkMode, setIsDarkMode } = useThemeStore();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const darkModeClass = document.documentElement.classList.contains('dark');

    setIsDarkMode(darkModeClass || darkModeMediaQuery.matches);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [setIsDarkMode]);

  return (
    <div className="w-[80%] mx-auto">
      <Marquee
        gradient={true}
        gradientColor={isDarkMode ? "rgb(26, 26, 26)" : "rgb(249, 249, 249)"}
        gradientWidth={100}
        speed={40}
        pauseOnHover={true}
        direction="left"
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