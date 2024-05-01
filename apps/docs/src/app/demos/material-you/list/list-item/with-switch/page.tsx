import { BakaList, BakaListItem, BakaSwitch, BakaText, BakaIcon } from "baka-ui";

export default function ListItemWithSwitchDemo() {
  return (
    <div className="container-low">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(1fr, 1fr)",
          gridColumnGap: 20,
          gridRowGap: 20,
          maxWidth: 740,
        }}
      >
        {/* With Switch */}
        <BakaList>
          <BakaListItem variant={"multi-line"}>
            <BakaSwitch readOnly={true} checked={false} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
              <BakaText variant={["body-medium", "variant"]}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={"multi-line"}>
            <BakaSwitch readOnly={true} checked={false} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
              <BakaText variant={["body-medium", "variant"]} style={{ width: "100%" }}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
            <BakaIcon>arrow_right</BakaIcon>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem>
            <BakaSwitch readOnly={true} checked={false} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <BakaText variant="body-large">List item</BakaText>
              <BakaText
                variant={["body-medium", "variant"]}
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem>
            <BakaSwitch readOnly={true} checked={false} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <BakaText variant="body-large">List item</BakaText>
              <BakaText
                variant={["body-medium", "variant"]}
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
            <BakaIcon>arrow_right</BakaIcon>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem>
            <BakaSwitch readOnly={true} checked={false} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem>
            <BakaSwitch readOnly={true} checked={false} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
              <BakaText variant="body-large">List item</BakaText>
            </div>
            <BakaIcon>arrow_right</BakaIcon>
          </BakaListItem>
        </BakaList>
      </div>
    </div>
  );
}
