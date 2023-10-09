
function ScreenManager({ screens = [] }) {
    const [activeScreen, setActiveScreen] = useState(screens.length > 0 ? screens[0].name : null);
    const [activeIndex, setActiveIndex] = useState(0);
    const ActiveComponent = screens.find(({ name }) => { return name == activeScreen }).Component;

    function goBack() {
        if (!activeScreen) return; // No active screen
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            setActiveScreen(screens[activeIndex - 1].name);
        }
    }

    function goNext() {
        if (!activeScreen) return; // No active screen
        if (activeIndex < screens.length - 1) {
            setActiveIndex(activeIndex + 1);
            setActiveScreen(screens[activeIndex + 1].name);
        }
    }

    return (
        <ActiveComponent manager={{ goBack, goNext }} />
    )
}

export default ScreenManager