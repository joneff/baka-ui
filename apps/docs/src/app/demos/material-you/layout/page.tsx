import { BakaContainer, BakaRow, BakaColumn } from "baka-ui";

export default function LayoutDemo() {
  return (
    <div style={{ width: "calc(100vw - 64px)", height: "calc(100vh - 64px)", display: "flex" }}>
      <BakaColumn variant={"region-left"} style={{ background: "#FDE0F1" }}>
        <div style={{ height: "calc(100vh - 64px" }} />
      </BakaColumn>
      <BakaContainer>
        <BakaRow>
          {Array.from({ length: 6 }).map((_, index) => (
            <BakaColumn key={index} count={2} style={{ background: "#E0F0F0" }}>
              <div style={{ height: "calc(100vh - 64px" }} />
            </BakaColumn>
          ))}
        </BakaRow>
      </BakaContainer>
    </div>
  );
}
