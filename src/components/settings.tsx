import "./../css/settings.css"

export default function Settings({ bgColor, setBgColor }: any) {

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBgColor(event.target.value);
    };

    return (
        <div className="settings">
            settings

            <ul>
                <li>
                    <label htmlFor="bg-color-picker">Background Color</label>
                    <input
                        type="color"
                        id="bg-color-picker"
                        value={bgColor}
                        onChange={handleColorChange}
                    />
                </li>
            </ul>
        </div>
    );
}