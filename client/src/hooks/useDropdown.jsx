import { useState } from "react"

export default function useDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const userIconClick = () => {
    setDropdownOpen((prev) => !prev)
  }

  return { dropdownOpen, userIconClick }
}
