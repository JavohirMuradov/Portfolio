import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from './useDarkSide';

function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div>
                <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} sunColor='#4F4665' moonColor='#98EA98' color={colorTheme === "light" ? "#98EA98" : "#4F4665"} />
            </div>
        </>
    );
}

export default Switcher