// Import Library
import "keen-slider/keen-slider.min.css";
import { AspectRatio, Button, Card, CardOverflow, CardContent, Typography } from "@mui/joy";

// Import Assets
import { Article1 } from "../../../assets/assets";

// Main Declaration & Export
export default function ArticleCard() {

  // Main Code
  return (
    <>
      <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
        <CardOverflow>
          <AspectRatio ratio="16/9">
            <img src={Article1} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ display: "flex", textAlign: "center" }}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "14px",
              color: "#0D5CAB",
              fontWeight: "500",
              margin: "10px 0px 10px 0px",
            }}
          >
            27 Maret 2023
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "2px",
            }}
          >
            Itjen Kemenkeu Siap Dukung 100 Persen Predikat ZI-WBK WBBM
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
          <CardContent sx={{ width: "100%", padding: "0px" }}>
            <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", borderColor: "#F05023", borderWidth: "5px", backgroundColor: "#F05023", margin: "0px" }}>
              Baca Artikel
            </Button>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
}
