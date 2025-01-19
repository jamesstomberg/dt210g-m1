import '../assets/Banner.scss';

export default function Banner({ image, alt }: { image: string; alt: string }) {
    return (
        <section className="banner">
            <img src={image} alt={alt} className="banner__image" />
        </section>
    );
}
