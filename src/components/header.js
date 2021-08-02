import * as React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/outline/esm"
import useDarkMode from "./use-dark-mode"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <aside
      className="fixed top-0 left-0 z-50 bg-fill md:w-menu md:h-menu w-mobile-menu h-mobile-menu md:rounded-br-2xl md:rounded-tr-2xl md:rounded-br-none rounded-tr-none">
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
            {colorTheme === "light" ? <button onClick={() => setTheme("dark")}>
                <SunIcon className="icon icon-muted"/>
              </button> :
              <button className="m-7" onClick={() => setTheme("light")}>
                <MoonIcon className="icon icon-muted"/>
              </button>}
          </div>
          <hr className="h-full w-px md:w-full inline-block bg-divider md:block"/>
          <div className="my-auto mx-5 md:my-5 md:mx-auto">
            <StaticImage
              src="../images/avatar.png"
              width={30}
              height={30}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="an avatar"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Header
