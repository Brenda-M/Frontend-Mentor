import { ReactNode } from 'react';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeContext';



interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { bodyColor, bodyBackground } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: bodyBackground, color: bodyColor}}>
      <Header />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
