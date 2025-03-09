import React from 'react';

interface QuoteSectionProps {
  quote: string;
  author: string;
  position?: 'left' | 'right';
  image?: string;
  isDurov?: boolean;
  isVitalik?: boolean;
  isNotcoin?: boolean;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  quote, 
  author, 
  position = 'left',
  image,
  isDurov = false,
  isVitalik = false,
  isNotcoin = false
}) => {
  return (
    <section className="py-20 px-4">
      <div className={`container mx-auto max-w-6xl ${position === 'right' ? 'text-right' : 'text-left'}`}>
        <div className="relative">
          {image && !isDurov && !isVitalik && !isNotcoin && (
            <div className="absolute -top-20 -z-10 opacity-30 blur-sm">
              <img src={image} alt="Background" className="w-96 h-96 object-cover" />
            </div>
          )}
          
          {isDurov && (
            <div className="absolute -top-60 right-0 -z-20 w-[400px] h-[600px]">
              <div className="relative w-full h-full">
                <img 
                  src="/paveldurov.png"
                  alt="Pavel Durov" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
            </div>
          )}

          {isVitalik && (
            <div className="absolute -top-40 right-0 -z-20 w-[400px] h-[600px]">
              <div className="relative w-full h-full">
                <img 
                  src="/vitalik.png"
                  alt="Vitalik Buterin" 
                  className="w-full h-full object-cover object-top grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
            </div>
          )}

          {isNotcoin && (
            <div className="absolute -top-20 right-0 -z-20 w-[300px] h-[300px]">
              <div className="relative w-full h-full">
                <img 
                  src="/Notcoin.png"
                  alt="Notcoin Logo" 
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          )}
          
          <div className="space-y-8">
            <p className="text-3xl md:text-4xl font-light leading-relaxed max-w-4xl">
              {quote}
            </p>
            
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <span className="w-12 h-[1px] bg-white/30"></span>
              <span>{author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
