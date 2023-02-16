import { createContext, useState } from "react"

export const defaultLocale = "en"
export const locales = ["en", "es", "ca"]
export const LanguageContext = createContext([])

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState("en")

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}