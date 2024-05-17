'use client'

import { FC } from "react"
import { useTheme } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Header: FC = () => {
  const { theme, setTheme } = useTheme()

  const handleLinkClick = () => {
    // Your onClick logic here
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  

  return (
    <header className="h-14 w-full">

      <div className="container p-6 flex flex-row justify-between items-center h-full">
        {/* <div
          className="flex flex-row items-center space-x-2 cursor-pointer"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
        > */}
        <Link href="#" onClick={handleLinkClick}>
          <FontAwesomeIcon
            icon={faMoon}
            className="text-black dark:text-blue inline-block"
          />
          <h2 className="text-sm font-semibold dark:text-blue inline-block pl-5">Dark Mode</h2>
          </Link>
        </div>
      {/* </div> */}
    </header>

  )
}

export default Header
