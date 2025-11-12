'use client'

import GPTButton from '@/components/GPTButton'
import useI18n from '@/hooks/useI18n'
import { useState } from 'react'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const { t } = useI18n()

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="text-2xl font-bold">{t('examle.title')}</div>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          GPTButton Component Demo
        </h1>
        <p className="mb-8 text-gray-600">
          Explore different variants, sizes, and states of the GPTButton
          component
        </p>

        <div className="space-y-12">
          {/* Variants Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Button Variants
            </h2>
            <div className="flex flex-wrap gap-4">
              <GPTButton variant="default">Default Button</GPTButton>
              <GPTButton variant="secondary">Secondary Button</GPTButton>
              <GPTButton variant="destructive">Destructive Button</GPTButton>
              <GPTButton variant="sec-destructive">
                Sec-Destructive Button
              </GPTButton>
              <GPTButton variant="text">Text Button</GPTButton>
            </div>
          </section>

          {/* Sizes Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Button Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <GPTButton size="default">Default Size</GPTButton>
              <GPTButton size="small">Small Size</GPTButton>
            </div>
          </section>

          {/* With Icons Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Buttons with Icons
            </h2>
            <div className="flex flex-wrap gap-4">
              <GPTButton
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                Icon Left
              </GPTButton>
              <GPTButton
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                Icon Right
              </GPTButton>
              <GPTButton
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                }
              />
            </div>
          </section>

          {/* Loading States Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Loading States
            </h2>
            <div className="flex flex-wrap gap-4">
              <GPTButton loading>Loading</GPTButton>
              <GPTButton loading variant="secondary">
                Loading Secondary
              </GPTButton>
              <GPTButton loading={{ delay: 500 }} variant="destructive">
                Loading with Delay
              </GPTButton>
              <GPTButton loading={loading} onClick={handleClick}>
                Click to Load (2s)
              </GPTButton>
            </div>
          </section>

          {/* Disabled States Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Disabled States
            </h2>
            <div className="flex flex-wrap gap-4">
              <GPTButton disabled>Disabled Default</GPTButton>
              <GPTButton disabled variant="secondary">
                Disabled Secondary
              </GPTButton>
              <GPTButton disabled variant="destructive">
                Disabled Destructive
              </GPTButton>
            </div>
          </section>

          {/* Block Buttons Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Block Buttons
            </h2>
            <div className="space-y-3">
              <GPTButton block>Block Default Button</GPTButton>
              <GPTButton block variant="secondary">
                Block Secondary Button
              </GPTButton>
              <GPTButton
                block
                variant="destructive"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                }
              >
                Block Destructive with Icon
              </GPTButton>
            </div>
          </section>

          {/* Combined Examples Section */}
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Combined Examples
            </h2>
            <div className="flex flex-wrap gap-4">
              <GPTButton
                variant="default"
                size="small"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                }
              >
                Small with Icon
              </GPTButton>
              <GPTButton
                variant="secondary"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                Download
              </GPTButton>
              <GPTButton
                variant="text"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              >
                Learn More
              </GPTButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
