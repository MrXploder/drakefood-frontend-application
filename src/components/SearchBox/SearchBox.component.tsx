import type IProps from './SearchBox.interface'
import { FormEvent, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default ({ onQueryChange }: IProps) => {
  const [search, setSearch] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    onQueryChange(search)
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="relative">
        <input
          type="text"
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-[99px] border border-[#dadada]"
          placeholder="Search for Amiibo name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="submit"
          className="text-black absolute right-2.5 bottom-2.5 font-medium text-sm px-4 py-2"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  )
}
