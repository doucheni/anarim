import React from "react"
import { HeaderLink, HeaderLinkProps } from "../atoms/header-link"
import Box from "@material-ui/core/Box"
import useTheme from "@material-ui/core/styles/useTheme"

type HeaderProps = {
  image: React.ReactNode
  links: HeaderLinkProps[]
}

export const Header = ({ image, links }: HeaderProps) => {
  const {
    palette: { common },
  } = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        py: "1rem",
        pl: "1rem",
        borderBottom: `0.0625rem solid ${common.black}`,
      }}
    >
      <Box sx={{ width: "9.8125rem", img: { width: "100%", height: "auto" } }}>
        {image}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", ml: "2.5rem" }}>
        {links.map(({ label, to, active }) => (
          <HeaderLink
            label={label}
            to={to}
            active={active}
            sx={{ mr: "1.5rem" }}
          />
        ))}
      </Box>
    </Box>
  )
}
