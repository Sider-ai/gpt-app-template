'use client'

import { useOpenAIGlobal, useWidgetProps } from '@/hooks/openai'
import i18n from '@/i18n'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'

const ListenLanguageChange = () => {
  const props = useWidgetProps<{ language: string }>()
  const locale = useOpenAIGlobal('locale')

  const lang = props?.language || locale
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang])
  return null
}

const I18nInitial = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ListenLanguageChange />
      {children}
    </I18nextProvider>
  )
}

export default I18nInitial
