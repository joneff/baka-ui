import { BakaContainer, BakaRow, BakaColumn } from "baka-ui";

export default function LayoutDemo() {
  return (
    <div style={{ width: "calc(100vw - 128px)", height: "calc(100vh - 64px)", display: "flex" }}>
      <BakaColumn variant={"region-left"} style={{ background: "#FDE0F1" }}>
        <div style={{ height: "calc(100vh - 64px" }} />
      </BakaColumn>
      <BakaContainer>
        <BakaRow style={{ height: "100%" }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <BakaColumn key={index} size={2}>
              <div style={{ height: "100%", width: "100%", background: "#E0F0F0" }} />
            </BakaColumn>
          ))}
        </BakaRow>
      </BakaContainer>
    </div>
  );
}
