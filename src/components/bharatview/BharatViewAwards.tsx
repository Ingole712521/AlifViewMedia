import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Award, ChevronRight, X } from 'lucide-react'
import { BHARAT_AWARD_CATEGORIES, BharatAwardCategory } from './bharatAwardCategories'

interface AwardSubcategoryDetailProps {
  category: BharatAwardCategory
  isHighlighted: boolean
  onClose: () => void
}

const AwardSubcategoryDetail: React.FC<AwardSubcategoryDetailProps> = ({
  category,
  isHighlighted,
  onClose
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true))
    return () => window.cancelAnimationFrame(frame)
  }, [category.id])

  if (!category.subcategories) return null

  const totalAwards = category.subcategories.reduce((sum, group) => sum + group.awards.length, 0)

  return (
    <div
      id={`awards-category-${category.id}`}
      className={`scroll-mt-28 bharat-awards-category-target ${isHighlighted ? 'is-highlighted' : ''}`}
    >
      <div
        className={`bharat-awards-reveal ${visible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8`}
      >
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bharat-primary)] text-white font-bold text-base flex-shrink-0 shadow-md">
            {category.id}
          </div>
          <div>
            <h3 className="bharat-heading text-xl md:text-2xl font-bold text-[var(--bharat-primary)] leading-tight">
              {category.title}
            </h3>
            <p className="text-[var(--bharat-text-muted)] text-sm mt-1">
              {category.subcategories.length} sub-categories · {totalAwards} awards
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 self-start text-sm font-medium text-[var(--bharat-text-muted)] hover:text-[var(--bharat-primary)] transition-colors duration-300"
        >
          <X size={16} />
          Close
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {category.subcategories.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`bharat-awards-reveal bharat-awards-subcard bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-[var(--bharat-primary)]/25 ${
              visible ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: visible ? `${120 + groupIndex * 90}ms` : '0ms' }}
          >
            <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-[var(--bharat-primary)]/5 to-transparent">
              <h4 className="text-[var(--bharat-primary)] font-semibold text-sm leading-snug">
                {group.title}
              </h4>
            </div>
            <ul className="px-4 py-3 space-y-2">
              {group.awards.map((award) => (
                <li
                  key={award}
                  className="flex items-start gap-2.5 text-sm text-[var(--bharat-text-main)]"
                >
                  <ChevronRight
                    className="text-[var(--bharat-secondary)] mt-0.5 flex-shrink-0"
                    size={14}
                    strokeWidth={2.5}
                  />
                  <span className="leading-snug">{award}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const BharatViewAwards: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
  const [highlightedCategoryId, setHighlightedCategoryId] = useState<number | null>(null)
  const detailsPanelRef = useRef<HTMLDivElement>(null)

  const selectedCategory = BHARAT_AWARD_CATEGORIES.find(
    (category) => category.id === selectedCategoryId && category.subcategories
  )

  const openCategory = useCallback((categoryId: number) => {
    setSelectedCategoryId(categoryId)
    setHighlightedCategoryId(categoryId)

    window.setTimeout(() => {
      detailsPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    window.setTimeout(() => {
      setHighlightedCategoryId((current) => (current === categoryId ? null : current))
    }, 1400)
  }, [])

  const closeDetails = useCallback(() => {
    setSelectedCategoryId(null)
    setHighlightedCategoryId(null)
  }, [])

  return (
    <section className="bharat-section bg-white">
      <div className="bharat-container">
        <div className="text-center mb-16">
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-4">
            BharatView Business Awards
          </h2>
          <p className="text-[var(--bharat-text-muted)] max-w-2xl mx-auto">
            Recognizing outstanding organizations and leaders across multiple sectors.
          </p>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {BHARAT_AWARD_CATEGORIES.map((category) => {
            const isSelected = selectedCategoryId === category.id

            const cardContent = (
              <>
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-md font-bold text-xs flex-shrink-0 mt-0.5 transition-colors duration-500 ${
                    isSelected
                      ? 'bg-[var(--bharat-primary)] text-white'
                      : 'bg-[var(--bharat-primary)]/10 text-[var(--bharat-primary)] group-hover:bg-[var(--bharat-primary)]/15'
                  }`}
                >
                  {category.id}
                </div>
                <Award
                  className="text-[var(--bharat-secondary)] mt-1 group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0"
                  size={18}
                />
                <div className="min-w-0 flex-1">
                  <span
                    className={`font-medium text-sm leading-tight block transition-colors duration-300 ${
                      isSelected
                        ? 'text-[var(--bharat-primary)]'
                        : 'text-[var(--bharat-text-main)] group-hover:text-[var(--bharat-primary)]'
                    }`}
                  >
                    {category.title}
                  </span>
                  {category.subcategories && (
                    <span className="text-[var(--bharat-secondary)] text-xs font-medium mt-1.5 inline-block transition-all duration-300 group-hover:translate-y-0.5">
                      {isSelected ? 'Showing details below' : 'View award details ↓'}
                    </span>
                  )}
                </div>
              </>
            )

            const cardClass =
              'bharat-awards-card p-4 rounded-lg border flex items-start gap-3 group bg-[var(--bharat-bg)] cursor-pointer transition-all duration-300'

            return category.subcategories ? (
              <button
                key={category.id}
                type="button"
                onClick={() => openCategory(category.id)}
                className={`${cardClass} text-left w-full hover:border-[var(--bharat-primary)]/30 hover:shadow-md ${
                  isSelected
                    ? 'border-[var(--bharat-primary)]/40 shadow-md ring-2 ring-[var(--bharat-primary)]/15'
                    : 'border-gray-100 ring-1 ring-[var(--bharat-primary)]/10'
                }`}
              >
                {cardContent}
              </button>
            ) : (
              <div key={category.id} className={`${cardClass} cursor-default border-gray-100`}>
                {cardContent}
              </div>
            )
          })}
        </div>

        {selectedCategory && (
          <div
            ref={detailsPanelRef}
            className="max-w-6xl mx-auto mt-20 pt-16 border-t border-gray-100 bharat-awards-reveal is-visible"
          >
            <div className="text-center mb-12">
              <h3 className="bharat-heading text-2xl md:text-3xl font-bold text-[var(--bharat-primary)] mb-3">
                Award Category Details
              </h3>
              <p className="text-[var(--bharat-text-muted)] text-sm md:text-base max-w-xl mx-auto">
                Sub-categories and individual awards for your selected sector.
              </p>
            </div>

            <AwardSubcategoryDetail
              key={selectedCategory.id}
              category={selectedCategory}
              isHighlighted={highlightedCategoryId === selectedCategory.id}
              onClose={closeDetails}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default BharatViewAwards
