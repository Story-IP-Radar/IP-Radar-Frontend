"use client"

import type React from "react"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  setCurrentPage: (page: number) => void
}

export function SearchBar({ searchTerm, setSearchTerm, setCurrentPage }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search assets by name or ID..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
