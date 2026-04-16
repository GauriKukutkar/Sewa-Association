import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PopupForm1 from "../Components/PopupForm1";
import PopupForm2 from "../Components/PopupForm2";
import PopupForm  from "../Components/PopupForm";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "../Components/WhatsAppButton";
import AIAssistant from "../Components/AIAssistant";

const MainLayout = () => {
  const [step, setStep] = useState(0);

  // First popup trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(1);
    }, 5000); // 5 sec

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (step === 1) {
      setStep(0);
      setTimeout(() => setStep(2), 8000); // 8 sec later
    } 
    else if (step === 2) {
      setStep(0);
      setTimeout(() => setStep(3), 10000); // 10 sec later
    } 
    else {
      setStep(0);
    }
  };

  return (
    <>
      {step === 1 && <PopupForm1 onClose={handleClose} />}
      {step === 2 && <PopupForm2 onClose={handleClose} />}
      {step === 3 && <PopupForm onClose={handleClose} />}

      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <AIAssistant />
      <Footer />
    </>
  );
};

export default MainLayout;