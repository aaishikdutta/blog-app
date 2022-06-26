import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const StandardLayout = ({children}) => {
    return (
        <>
        <Navigation />
        {children}
        <Footer />
        </>
    )
}

export default StandardLayout;