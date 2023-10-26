// Import Library
import {
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import { ImgIrjen } from "../../../assets/assets";

// Main Declaration
const ArIrjen = () => {

// MUI Styling CSS
  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
    padding: "30px 50px 150px 50px",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "50px 30px",
    },
  }));

  const ImgBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    width: "300px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }));

  const TextBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
    gap: "10px",
  }));

  const CustomTitle = styled(Typography)(() => ({
    fontSize: "32px",
    fontWeight: "700",
    textTransform: "capitalize",
    marginBottom: "50px",
  }));

  const SubTitle = styled(Typography)(() => ({
    fontSize: "28px",
    fontWeight: "600",
    textTransform: "capitalize",
    margin: "30px 0px",
  }));

  const CustomText = styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "full-width",
  }));

// Main Code
  return (
    <ContentBox>
      <CustomTitle>inspektur jenderal</CustomTitle>
      <ImgBox>
        <img src={ImgIrjen} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </ImgBox>
      <SubTitle>Awan Nurmawan Nuh, S.E., Ak., M.B.T,</SubTitle>
      <TextBox>
        <CustomText paragraph>
          lahir di Bandung pada tanggal 26 September 1968. Beliau menyelesaikan pendidikan dan memperoleh gelar Sarjana Ekonomi dari Universitas Gadjah Mada, Yogyakarta, pada tahun 1992. Kemudian, beliau meraih gelar Master of Business
          Taxation dari University of Southern California, Amerika Serikat pada tahun 1997.
        </CustomText>
        <CustomText paragraph>
          Beliau dilantik oleh Menteri Keuangan menjadi Inspektur Jenderal pada 2 Agustus 2021. Sebelum menjabat sebagai Inspektur Jenderal Kementerian Keuangan, beliau mengemban jabatan sebagai Kepala Kanwil DJP Kalimantan Barat pada tahun
          2011. Kemudian Direktur Peraturan Perpajakan I Direktorat Jenderal Pajak. Lalu ditunjuk sebagai Sekretaris Direktorat Jenderal Pajak sejak 11 November 2013. Pada Oktober 2015, beliau menjabat sebagai Direktur Ekstensifikasi dan
          Penilaian sebelum akhirnya dipercaya sebagai Kepala Kantor Wilayah Direktorat Jenderal Pajak (DJP) Jawa Tengah I sejak 23 Mei 2016 dan menjadi Staf Ahli Bidang Peraturan dan Penegakan Hukum Pajak sejak 31 Oktober 2016. Beliau
          memperoleh penghargaan Satya Lancana Karya Satya X dan XX Tahun oleh Presiden RI
        </CustomText>
        <CustomText paragraph>Alamat Unit Kerja: Gd. Djuanda II Lt. IV Kementerian Keuangan, Jl. Dr. Wahidin Raya No.1 Jakarta Pusat (10710)</CustomText>
        <CustomText paragraph>Kontak unit kerja: (021) 3456546 internal 6990</CustomText>
      </TextBox>
    </ContentBox>
  );
};

// Export Code
export default ArIrjen;
