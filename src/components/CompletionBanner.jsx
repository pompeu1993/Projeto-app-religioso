import React, { useState, useEffect } from 'react';
import { Meteors } from './ui/meteors';
import { CheckCircle, X, FileText, Code, Palette } from 'lucide-react';
import { Button } from './ui/button';

export const CompletionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Mostra o banner após 2 segundos da entrada no site
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };



  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
      isClosing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
    }`}>
      <div className="relative max-w-sm">
        {/* Fundo com gradiente e blur */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-green-500 transform scale-[0.85] rounded-2xl blur-xl opacity-70" />
        
        {/* Banner principal */}
        <div className="relative shadow-2xl bg-gray-900 border border-gray-700 px-6 py-6 h-full overflow-hidden rounded-2xl flex flex-col">
          {/* Botão de fechar */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-white z-20"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Ícone de sucesso */}
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>

          {/* Título */}
          <h1 className="font-bold text-lg text-white mb-3 relative z-50 leading-tight">
            🎉 Planejamento Completo!
          </h1>

          {/* Descrição */}
          <p className="font-normal text-sm text-gray-300 mb-4 relative z-50 leading-relaxed">
            Seu planejamento do sistema está <span className="text-green-400 font-semibold">100% completo</span>! 
            Já separamos tudo que você precisa saber para iniciar o projeto de capelania cristã.
          </p>

          {/* Lista de itens completos */}
          <div className="space-y-2 mb-4 relative z-50">
            <div className="flex items-center text-xs text-gray-400">
              <FileText className="h-3 w-3 mr-2 text-green-400" />
              PRD Refinado & Documentação
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <Code className="h-3 w-3 mr-2 text-green-400" />
              Arquitetura & Tecnologias
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <Palette className="h-3 w-3 mr-2 text-green-400" />
              Wireframes & Fluxogramas
            </div>
          </div>



          {/* Efeito de meteoros */}
          <Meteors number={15} />
        </div>
      </div>
    </div>
  );
}; 