import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <label className="ui-switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider">
          <span className="circle"></span>
        </span>
      </label>
    </div>
  );
};

export default Toggle;
