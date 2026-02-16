
import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const NotificationBanner: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Start fading out after 5.5 seconds to complete by 6 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    // Completely unmount after the animation finishes (6 seconds)
    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, 6000);

    // Set target date to exactly 30 days from now for demonstration
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`bg-[#d35400] text-white py-2 px-4 relative z-[60] text-center shadow-lg transition-all duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 animate-pulse" />
          <span>Announcement: We are migrating to <strong className="underline">brickworks-agency.com.au</strong></span>
        </div>
        
        <div className="flex items-center gap-4 bg-black/20 px-3 py-1 rounded-full border border-white/10">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className="uppercase tracking-tighter opacity-80 mr-1">Time Remaining:</span>
          </div>
          <div className="flex gap-2 font-mono">
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
