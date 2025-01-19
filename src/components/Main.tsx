import '../assets/Main.scss';

export default function Main({ title }: { title: string }) {
    return (
        <main className="site-content">
            <section>
                <h1>{title}</h1>
            </section>
        </main>
    );
}
