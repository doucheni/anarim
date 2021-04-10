import React from "react"
import Link from "@material-ui/core/Link"
import { useTheme } from "@material-ui/core/styles"
import { SxProps } from "@material-ui/system"

export type HeaderLinkProps = {
  label: string
  to: string
  active?: boolean
  sx?: SxProps
}

export const HeaderLink = ({
  label,
  to,
  active = false,
  sx = {},
}: HeaderLinkProps) => {
  const {
    palette: { grey },
  } = useTheme()

  return (
    <Link
      href={to}
      sx={{
        ...sx,
        ":hover": {
          color: grey[200],
        },
      }}
      color={active ? grey[300] : grey[100]}
      underline="none"
      variant="subtitle1"
    >
      {label}
    </Link>
  )
}
