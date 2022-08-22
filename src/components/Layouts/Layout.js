import Navigation from '../Navigation/Navigation';
import Footer from '../Navigation/Footer';

const Layout = props => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
