import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

function App() {
    return (
        <>
            <Header title="Dynamiska hundar" />
            <Main title="Samling av hundar från Dog API" />
            <Footer />
        </>
    );
}

export default App;
