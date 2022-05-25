import About from "./components/about/About";
import Footer from "./components/reuseable/footer/Footer";
import Header from "./components/reuseable/header/Header";
import "./App.scss"
import Services from "./components/Services/Services";
import RecentProject from "./components/recent_project/RecentProject";
import Customer from "./components/customer/Customer";
import Testimonials from "./components/testimonials/Testimonials";
import Feature from "./components/feature/Feature";
import Member from "./components/team_member/Member";
import Technology from "./components/tools&technology/Technology";
import ConnectWithUs from "./components/connect/ConnectWithUs";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <div className="App">
        <Header />
        <Banner/>
         <About />
         <Services />
         <RecentProject />
         <Customer />
         <Testimonials />
         <Feature />
         <Member />
         <Technology />
         <ConnectWithUs />
        <Footer />
    </div>
  );
}

export default App;
