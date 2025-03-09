
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface TonPriceWidgetProps {
  onClose: () => void;
}

const TonPriceWidget = ({ onClose }: TonPriceWidgetProps) => {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchTonPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        
        if (data && data['the-open-network']) {
          setPrice(data['the-open-network'].usd);
          setChange24h(data['the-open-network'].usd_24h_change);
        }
      } catch (error) {
        console.error('Error fetching TON price:', error);
        // Fallback price if API fails
        setPrice(2.85);
        setChange24h(1.23);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTonPrice();
    
    // Refresh price every 60 seconds
    const interval = setInterval(fetchTonPrice, 60000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass pixel-border p-4 min-w-[180px]"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="pixel-text text-sm">TON PRICE</h3>
        <button onClick={onClose} className="text-white/70 hover:text-white">
          <X size={16} />
        </button>
      </div>
      
      <div className="flex flex-col items-center">
        {isLoading ? (
          <div className="animate-pulse h-6 w-20 bg-white/20 my-1 rounded"></div>
        ) : (
          <>
            <span className="text-xl font-bold">${price?.toFixed(2)}</span>
            {change24h !== null && (
              <span className={`text-xs ${change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {change24h >= 0 ? '↑' : '↓'} {Math.abs(change24h).toFixed(2)}%
              </span>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TonPriceWidget;
