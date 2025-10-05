import { Breadcrumbs, Link as MLink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };

export default function BreadcrumbsNav({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumbs sx={{ mb: 2 }}>
      {items.map((c, i) =>
        c.to ? (
          <MLink
            component={Link}
            key={i}
            color="inherit"
            to={c.to}
            underline="hover"
          >
            {c.label}
          </MLink>
        ) : (
          <Typography key={i} color="text.primary">
            {c.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
