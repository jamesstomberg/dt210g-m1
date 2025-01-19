import Banner from './Banner';
import SvgLogo from './SvgLogo';
import reactLogo from '../assets/images/react.svg';
import bannerImage from '../assets/images/banner.jpg';
import '../assets/Header.scss';

export default function Header({ title }: { title: string }) {
    return (
        <header className="site-header">
            <div className="site-header__top">
                <div className="site-header__logo-container">
                    <span>
                        <SvgLogo src={reactLogo} className="siter-header__logo" alt="React Logo" />
                    </span>
                    <span className="site-header__logo-text">{title}</span>
                </div>

                <div>
                    DT210G
                </div>
            </div>

            <Banner image={bannerImage} alt="decorative banner image"/>
        </header>
    );
}
