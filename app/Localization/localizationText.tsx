interface LocalizationText {
  title: string;
  info: string;
  subtitle: string;
}

const localizationText: Record<string, LocalizationText> = {
  en: {
    
    title: "EnFin Accounting App",
    subtitle: "Ledger",
    info: "This application has been prepared in accordance with Turkish tax deposits and Turkish accounting standards.",
  },
  tr: {
    title: "EnFin Muhasebe Uygulaması",
    subtitle: "Muhasebe Defteri",
    info: "Bu uygulama Türkiye vergi mevduatı ve Türkiye muhasebe standartlarına göre hazırlanmıştır.",
  },
};

export default localizationText;