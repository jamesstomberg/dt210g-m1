import useGet from '../hooks/useGet';
import Card from './Card';
import '../assets/Cards.scss';

interface DogData {
    message: string[];
    status: string;
}

export default function Cards({
    setClickedDog,
}: {
    setClickedDog: React.Dispatch<React.SetStateAction<string>>;
}) {
    const url = 'https://dog.ceo/api/breeds/image/random/9';
    const { data, isLoading, error } = useGet<DogData>(url);

    const processImageData = (imageUrl: string) => {
        const parts = imageUrl.split('/');
        const breed = parts[4];
        const imageName = parts[parts.length - 1];
        const formattedBreed = capitalizeBreed(breed);

        return {
            src: imageUrl,
            alt: imageName,
            title: formattedBreed,
        };
    };

    const capitalizeBreed = (breed: string) => {
        return breed
            .replace('-', ' ')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="site-content__cards">
            {isLoading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {data?.message.map((imageUrl, index) => {
                const { src, alt, title } = processImageData(imageUrl);

                return <Card key={index} src={src} alt={alt} title={title} setClickedDog={setClickedDog} />;
            })}
        </div>
    );
}
