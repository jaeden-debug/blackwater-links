import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const url = "https://links.blackwateraquatics.ca/";
const outDir = path.join(process.cwd(), "public");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

await QRCode.toFile(path.join(outDir, "blackwater-links-qr.png"), url, {
  width: 1200,
  margin: 2,
  errorCorrectionLevel: "H",
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
});

const svg = await QRCode.toString(url, {
  type: "svg",
  margin: 2,
  errorCorrectionLevel: "H",
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
});

fs.writeFileSync(path.join(outDir, "blackwater-links-qr.svg"), svg);

console.log("QR code files created:");
console.log("public/blackwater-links-qr.png");
console.log("public/blackwater-links-qr.svg");