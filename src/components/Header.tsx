export default function Header({ title }: { title: string }) {
    return (
        <header>
            <div className="site-logo">
                <span className="site-logo__text">{title}</span>
            </div>
        </header>
    );
}
