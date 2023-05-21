interface LocalizationText {
  title: string;
  info: string;
}

const localizationText: Record<string, LocalizationText> = {
  en: {
    title: "Accounting App",
    info: "This application has been prepared in accordance with Turkish tax deposits and Turkish accounting standards.",
  },
  tr: {
    title: "Muhasebe Uygulaması",
    info: "Bu uygulama Türkiye vergi mevduatı ve Türkiye muhasebe standartlarına göre hazırlanmıştır.",
  },
};

export default localizationText;