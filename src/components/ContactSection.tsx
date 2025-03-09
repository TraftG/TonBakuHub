
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Send, Mail, Clock } from "lucide-react";

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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setLoading(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Telegram",
      info: "@tonbakuhub",
      link: "https://t.me/tonbakuhub"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@tonbaku.com",
      link: "mailto:info@tonbaku.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Рабочие часы",
      info: "Пн-Пт: 9:00 - 18:00",
      link: "#"
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance">
            У вас есть вопросы или предложения? Мы всегда открыты для общения!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-black"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Ваш email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-black"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Расскажите нам о вашем проекте или вопросе"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-black resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Отправить <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-black rounded-full p-3 text-white mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Присоединяйтесь к сообществу</h4>
                <p className="mb-4">
                  Станьте частью растущего сообщества энтузиастов TON. Подпишитесь на наши каналы 
                  для получения последних новостей и обновлений.
                </p>
                <Button 
                  className="bg-white text-black hover:bg-gray-200 w-full"
                  asChild
                >
                  <a 
                    href="https://t.me/tonbakuhub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Telegram сообщество
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
