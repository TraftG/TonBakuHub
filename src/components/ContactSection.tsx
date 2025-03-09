import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32 px-4 bg-black" id="contact">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="space-y-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Давайте<br />
            создавать<br />
            будущее вместе
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Форма */}
          <div className="space-y-12">
            <form 
              action="https://formsubmit.co/tonbakuhub@gmail.com" 
              method="POST"
              className="space-y-8"
            >
              <input type="hidden" name="_next" value="https://traftg.github.io/TonBakuHub/" />
              <input type="hidden" name="_subject" value="Новое сообщение с сайта TON Baku" />
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="notcoin-button w-full"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Контакты */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-medium">Контакты</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://t.me/tonbakuhub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-sm text-white/50 mb-2">Telegram</p>
                  <p className="text-lg notcoin-link">@tonbakuhub</p>
                </a>

                <a 
                  href="mailto:tonbakuhub@gmail.com" 
                  className="block group"
                >
                  <p className="text-sm text-white/50 mb-2">Email</p>
                  <p className="text-lg notcoin-link">tonbakuhub@gmail.com</p>
                </a>

                <div className="block">
                  <p className="text-sm text-white/50 mb-2">Рабочие часы</p>
                  <p className="text-lg">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Присоединяйтесь</h3>
              <p className="text-white/70">
                Станьте частью нашего сообщества и следите за развитием проекта
              </p>
              <a 
                href="https://t.me/tonbakuhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="notcoin-button inline-block"
              >
                Telegram сообщество
              </a>
            </div>
          </div>
        </div>

        {/* Вертикальный текст */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 vertical-text text-sm text-white/50 hidden md:block">
          CONTACT
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
