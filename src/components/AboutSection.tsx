import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-32 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Опыт<br />
              Web3
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Мы создаем пространство, где каждый может начать свой путь в Web3 без сложностей и барьеров. Наша миссия — сделать блокчейн доступным и понятным для всех.
            </p>
          </div>

          <div className="space-y-12">
            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-medium">Простота</h3>
              <p className="text-white/70">
                Мы убираем сложности и делаем первые шаги в Web3 интуитивно понятными
              </p>
            </div>

            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-medium">Безопасность</h3>
              <p className="text-white/70">
                Безопасность и надежность — наши главные приоритеты в работе с пользователями
              </p>
            </div>

            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-medium">Инновации</h3>
              <p className="text-white/70">
                Мы постоянно развиваемся и внедряем новые технологии для улучшения опыта пользователей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
