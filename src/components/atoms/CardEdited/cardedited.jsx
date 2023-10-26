// Import Library
import { AspectRatio, IconButton, Card, CardOverflow, Divider, Typography, Link } from "@mui/joy";

// Import Assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Main Declaration & Export
export default function MultipleInteractionCard() {

// Main Code
  return (
    <Card variant="outlined" sx={{ width: 300, gap: "0px" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318" srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x" loading="lazy" alt="" />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="warning"
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "4rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 5, mb: 4 }}>
        <Link href="#multiple-actions" overlay underline="none">
          Itjen Kemenkeu Siap Dukung 100 Persen Predikat ZI-WBK WBBM
        </Link>
      </Typography>
      <Divider inset="context" />
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
        }}
      >
        <Typography level="body3" sx={{ fontWeight: "md", color: "text.secondary", fontSize: "12px" }}>
          6.3k views
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: "md", color: "text.secondary", fontSize: "12px" }}>
          1 hour ago
        </Typography>
      </CardOverflow>
    </Card>
  );
}
