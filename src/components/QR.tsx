import QRCode from "react-qr-code";

export default function QrCode({ value }: { value: string }) {
   return (
      <>
         <QRCode
            size={256}
            style={{
               height: "auto",
               maxWidth: "100%",
               width: "100%",
            }}
            bgColor="hsl(var(--background))"
            fgColor="hsl(var(--foreground))"
            value={value}
            viewBox={`0 0 256 256`}
         />
      </>
   );
}
