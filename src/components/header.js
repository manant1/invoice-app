import * as React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/outline/esm"
import useDarkMode from "./use-dark-mode"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <aside
      className="z-50 bg-fill md:w-menu md:h-menu w-mobile-menu h-mobile-menu md:rounded-br-2xl md:rounded-tr-2xl md:rounded-br-none rounded-tr-none">
      <div className="flex flex-wrap flex-col justify-between h-full w-full">
        <div className="">
          <div
            className="logo bg-primary md:h-menu-logo md:w-menu-logo h-mobile-menu-logo w-mobile-menu-logo rounded-tr-2xl rounded-br-2xl">
        <span className="circle">
        </span> <span className="triangle"></span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col text-center justify-end">
          <div>
            {colorTheme === "light" ? <button className="mt-7 mb-7" onClick={() => setTheme("dark")}>
                <SunIcon className="icon icon-muted"/>
              </button> :
              <button className="m-7" onClick={() => setTheme("light")}>
                <MoonIcon className="icon icon-muted"/>
              </button>}
          </div>
          <hr className="h-full w-px md:w-full inline-block bg-divider md:block"/>
          <div>
            <StaticImage
              src="../images/avatar.png"
              width={32}
              height={32}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="an avatar"
              className="m-6"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Header
