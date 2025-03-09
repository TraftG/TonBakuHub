import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative px-4 py-20">
      {/* Вертикальный текст слева */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 vertical-text text-sm text-white/50 hidden md:block">
        SCROLL DOWN
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <h1 className="hero-text">
            TON BAKU HUB<br />
          </h1>
          
          <p className="section-text text-white/70">
            Что, если мир устроен не так, как нас учили?<br />
            Если ценность — это не цифры на счетах,<br />
            а энергия, которая объединяет людей?
          </p>

          <div className="flex gap-6 items-center pt-8">
            <a href="#about" className="notcoin-button">
              Исследовать
            </a>
            <span className="text-sm text-white/50">
              Время прочтения: 10 минут
            </span>
          </div>
        </div>
      </div>

      {/* Вертикальный текст справа */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 vertical-text text-sm text-white/50 hidden md:block">
        TON BAKU
      </div>
    </section>
  );
};

export default HeroSection;
