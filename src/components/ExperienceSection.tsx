import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const ExperienceSection = () => {
  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Начало пути',
      description: 'Знакомство с экосистемой TON, первые инвестиции и исследования возможностей блокчейна.'
    },
    {
      year: '2024',
      title: 'Формирование команды',
      description: 'Объединение с единомышленниками, создание TON Baku, первые совместные проекты и инициативы.'
    },
    {
      year: '2024',
      title: 'Запуск первых проектов',
      description: 'Разработка и запуск первых децентрализованных приложений на TON, установление связей с сообществом.'
    },
    {
      year: '2024',
      title: 'Масштабирование',
      description: 'Расширение портфеля проектов, привлечение новых партнеров и инвесторов, укрепление позиций на рынке.'
    },
    {
      year: '2025',
      title: 'Новые горизонты',
      description: 'Выход на международный уровень, участие в глобальных инициативах TON, разработка инновационных решений.'
    }
  ];

  return (
    <section className="py-32 px-4 bg-black" id="experience">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок секции */}
        <div className="space-y-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Путь TON Baku<br />
            в мире блокчейн<br />
            инноваций
          </h2>
        </div>

        {/* Таймлайн */}
        <div className="space-y-32">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 md:gap-20 items-start group ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Год */}
              <div className="w-24 md:w-32">
                <span className="text-3xl md:text-4xl font-light text-white/70">
                  {item.year}
                </span>
              </div>

              {/* Контент */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-medium">
                  {item.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {item.description}
                </p>
                {/* Линия */}
                <div className="h-[1px] bg-white/10 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Вертикальный текст */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 vertical-text text-sm text-white/50 hidden md:block">
          TIMELINE
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
