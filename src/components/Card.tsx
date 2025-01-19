export default function Card({
    src,
    alt,
    title,
    setClickedDog,
}: {
    src: string;
    alt: string;
    title: string;
    setClickedDog: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div
            className="site-content__card"
            onClick={() => {
                setClickedDog(title);
            }}
        >
            <div className="site-content__card-image-container">
                <img src={src} alt={alt} />
            </div>
            <p>{title}</p>
        </div>
    );
}
