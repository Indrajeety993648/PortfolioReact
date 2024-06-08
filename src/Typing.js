import { useEffect, useState } from "react";

function Typing({
    text,
    typingspeed = 100,
    deletingspeed = 50,
    duration = 1000
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!deleting) {
                if (displayedText.length < text[index].length) {
                    setDisplayedText(prev => prev + text[index].charAt(displayedText.length));
                } else {
                    setTimeout(() => setDeleting(true), duration);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(prev => prev.slice(0, -1));
                } else {
                    setDeleting(false);
                    setIndex(prev => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            deleting ? deletingspeed : typingspeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, deleting, index, text, typingspeed, deletingspeed, duration]);

    return (
        <div className="typing-effect">
            {displayedText}
            <span className="caret"></span>
        </div>
    );
}

export default Typing;