import { BakaContainer, BakaRow, BakaColumn } from "baka-ui";

export type LayoutStoryProps = {
  columns?: number;
  size?: number;
  autosize?: boolean;
};

export const defaultProps = {
  columns: 4,
  autosize: false,
  size: 3,
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
        <BakaRow>
          {Array.from({ length: args.columns }).map((_, index) => (
            <BakaColumn
              key={index}
              count={args.autosize ? undefined : args.size}
              style={{ background: "#E0F0F0" }}
            >
              <div style={{ height: "calc(100vh - 64px" }} />
            </BakaColumn>
          ))}
        </BakaRow>
      </BakaContainer>
    </div>
  );
}
