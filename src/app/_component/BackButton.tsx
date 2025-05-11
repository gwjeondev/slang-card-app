'use client'

import Link from 'next/link'

export default function BackButton({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link href={href}>
      <button className='flex items-center gap-1 text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition'>
        ← <span>{label}</span>
      </button>
    </Link>
  )
}
