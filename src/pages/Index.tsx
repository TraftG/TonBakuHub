import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import TonPriceWidget from "@/components/TonPriceWidget";
import QuoteSection from "@/components/QuoteSection";

const Index = () => {
  const [showPriceWidget, setShowPriceWidget] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    // Add background color to body
    document.body.style.backgroundColor = '#000';
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="/TonBakuHub/FON.png" 
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <Header />
      
      {/* Fixed TON price widget */}
      {showPriceWidget && (
        <div className="fixed bottom-4 right-4 z-50">
          <TonPriceWidget onClose={() => setShowPriceWidget(false)} />
        </div>
      )}
      
      <main className="relative z-10">
        <HeroSection />
        <QuoteSection 
          quote="Главная проблема web3 — недоступность web3, истина скрывается за сложными терминами и механизмами"
          author="Notcoin"
          position="right"
          isNotcoin={true}
        />
        <AboutSection />
        <QuoteSection 
          quote="Мы помним P2E игры, они были не идеальны, но открыли digital-врата огромному количеству людей. Notcoin выбрал эффективнейшую маркетинговую стратегию — геймифицировать процесс, обучить людей, построить коммьюнити"
          author="Павел Дуров"
          position="left"
          isDurov={true}
        />
        <TeamSection />
        <QuoteSection 
          quote="Вообще-то у всех технологических революций похожий путь принятия"
          author="Виталик Бутерин"
          position="left"
          image="/TonBakuHub/vitalik.png"
          isVitalik={true}
        />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
