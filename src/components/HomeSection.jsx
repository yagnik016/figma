export function CarouselWithContent() {
  return (
    <div
      className="flex flex-row"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        width: "1440px",
        height: "500px",
        background: "linear-gradient(90.62deg, #FFF7E0 0.57%, #FCC42C 207.94%)",
      }}
    >
      <div
        className="flex flex-row"
        style={{
          alignItems: "center",
          padding: 0,
          gap: "24px",
          position: "absolute",
          width: "860.98px",
          height: "411px",
          left: "130px",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            alignItems: "flex-start",
            padding: 0,
            gap: "24px",
            width: "384px",
            height: "305px",
          }}
        ></div>
      </div>
      <div
        className="flex flex-col"
        style={{
          alignItems: "flex-start",
          padding: "24px",
          gap: "24px",
          position: "absolute",
          width: "283px",
          height: "428px",
          left: "1037px",
          background: "#FFFFFF",
          borderRadius: "16px",
        }}
      ></div>
      <div
        className="flex flex-row"
        style={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 0,
          gap: "16px",
          position: "absolute",
          width: "956px",
          height: "48px",
          left: "98px",
        }}
      ></div>
    </div>
  );
}
