import { BakaContainer, BakaRow, BakaColumn } from "baka-ui";

export type LayoutStoryProps = {
  columns?: number;
  size?: number;
  autosize?: boolean;
};

export const defaultProps = {
  columns: 12,
  autosize: false,
  size: 2,
  region: true,
};

export default function LayoutDemo(props: LayoutStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div style={{ width: "calc(100vw - 128px)", height: "calc(100vh - 64px)", display: "flex" }}>
      {args.region ? (
        <BakaColumn variant={"region-left"} style={{ background: "#FDE0F1" }}>
          <div style={{ height: "calc(100vh - 64px" }} />
        </BakaColumn>
      ) : null}
      <BakaContainer>
        <BakaRow style={{ height: "100%" }}>
          {Array.from({ length: args.columns }).map((_, index) => (
            <BakaColumn key={index} size={args.autosize ? undefined : args.size}>
              <div style={{ height: "100%", width: "100%", background: "#E0F0F0" }} />
            </BakaColumn>
          ))}
        </BakaRow>
      </BakaContainer>
    </div>
  );
}
