'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/language-context';

export function ChatbotWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: t(
        'Hello! Welcome to Versate. How can I help you find your perfect land parcel in Mauritius today?',
        'Bonjour! Bienvenue chez Versate. Comment puis-je vous aider à trouver votre parcelle de terrain parfaite à Maurice?'
      ),
      isUser: false,
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: t(
            'Thank you for your message! One of our land specialists will get back to you shortly. In the meantime, feel free to browse our featured land plots.',
            'Merci pour votre message! Un de nos spécialistes vous contactera bientôt. En attendant, n\'hésitez pas à parcourir nos terrains en vedette.'
          ),
          isUser: false,
        },
      ]);
    }, 1000);

    setMessage('');
  };

  return (
    <>
      {/* Chat Button - Like parklane.mu style */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-2xl hover:shadow-3xl transition-all duration-300 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label={t('Open chat', 'Ouvrir le chat')}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-card/80 transition-all duration-300 shadow-lg"
        aria-label={t('Scroll to top', 'Retour en haut')}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card border border-foreground/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-background px-5 py-4 border-b border-foreground/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Versate</h4>
                  <p className="text-xs text-muted-foreground">
                    {t('Land Specialists', 'Spécialistes du Terrain')}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 max-h-80 overflow-y-auto bg-background/50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                      msg.isUser
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-card border border-foreground/5 text-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-foreground/5 bg-card">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('Type a message...', 'Écrivez un message...')}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-background border-foreground/10 text-foreground placeholder:text-muted-foreground h-10"
                />
                <Button
                  onClick={handleSend}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 h-10 w-10 p-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
