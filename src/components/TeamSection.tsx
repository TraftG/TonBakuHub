import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: 'Marat',
      role: 'Founder',
      image: '/Marat.png'
    },
    {
      name: 'Traft',
      role: 'Co-founder',
      image: '/taxmasib.jpg'
    }
  ];

  return (
    <section className="py-32 px-4" id="team">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок секции */}
        <div className="space-y-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Наша<br />команда
          </h2>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Два человека, одна цель — Развитие TON в Баку
          </p>
        </div>

        {/* Сетка с командой */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Фото */}
              <div className="aspect-[4/5] mb-8 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Информация */}
              <div className="space-y-3">
                <h3 className="text-2xl font-medium">{member.name}</h3>
                <p className="text-lg text-white/50">{member.role}</p>
              </div>

              {/* Декоративная линия */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Вертикальный текст */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 vertical-text text-sm text-white/50 hidden md:block">
          FOUNDERS
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
