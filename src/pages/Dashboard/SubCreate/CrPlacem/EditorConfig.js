import { BASE_URL } from "../../../../services/api";
import axios from "axios";

export const EditorConfig = {
  placeholder: "Tulis Artikel Disini",
  attribution: false,
  imagesLoadURL: `${BASE_URL}images/`,
  imageUploadURL: `${BASE_URL}api/upload/imagesartikel`,
  imageUploadMethod: "POST",
  imageAllowedTypes: ["jpeg", "jpg", "png"],
  videoUploadURL: `${BASE_URL}api/upload/videosartikel`,
  videoUploadMethod: "POST",
  videoAllowedTypes: ["webm", "jpg", "ogg", "vlc", "mp4"],
  fileUploadURL: `${BASE_URL}api/upload/filesartikel`,
  fileUploadMethod: "POST",
  fileAllowedTypes: ["*"],
  fontFamilySelection: true,
  fontSizeSelection: true,
  paragraphFormatSelection: true,
  toolbarButtons: {
    moreText: {
      buttons: ["fontFamily", "paragraphFormat", "textColor", "fontSize", "bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "backgroundColor", "inlineClass", "inlineStyle", "clearFormatting"],
    },
    moreParagraph: {
      buttons: ["align", "formatOL", "formatUL", "paragraphStyle", "lineHeight", "outdent", "indent", "quote", "html"],
    },
    moreRich: {
      buttons: ["insertLink", "insertImage", "insertVideo", "insertTable", "insertFile", "insertFiles", "emoticons", "fontAwesome", "specialCharacters", "embedly", "insertHR"],
    },
    moreMisc: {
      buttons: ["undo", "redo", "fullscreen", "print", "getPDF", "spellChecker", "selectAll", "help"],
    },
  },
  events: {
    "image.inserted": () => {
      console.log("gambar ditambahkan!");
    },
    "image.removed": function (img) {
      const namaFile = img.attr("src").split("/").pop();
      const apiUrl = `${BASE_URL}`;
      axios.delete(apiUrl + "api/upload/imageartikeldelete/" + namaFile, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    "video.removed": function (video) {
      const namaFile = video.attr("src").split("/").pop();
      const apiUrl = `${BASE_URL}`;
      axios.delete(apiUrl + "api/upload/videoartikeldelete/" + namaFile, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    "file.unlink": function (file) {
      const namaFile = file.getAttribute("href").split("/").pop();
      const apiUrl = `${BASE_URL}`;
      axios.delete(apiUrl + "api/upload/pdfdelete/" + namaFile, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    "froalaEditor.initialized": function () {
      console.log("initialized");
    },
  },
};
