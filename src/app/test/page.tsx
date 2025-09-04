export default function TestPage() {
  const ColorSwatch = ({
    name,
    bgColor,
    textColor,
  }: {
    name: string;
    bgColor: string;
    textColor: string;
  }) => (
    <div className="w-full">
      <div
        className={`${bgColor} ${textColor} p-6 rounded-lg shadow-md transition-colors duration-300`}
      >
        <p className="font-bold text-lg">{name}</p>
        <p className="font-mono text-sm">{bgColor}</p>
      </div>
    </div>
  );

  return (
    <div className="p-10 bg-background min-h-screen">
      <h1 className="text-4xl font-bold dark:text-[var(--primary)] text-[var(--secondary)] mb-8">
        Color Palette Test
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* رنگ‌های اصلی */}
        <ColorSwatch
          name="Background"
          bgColor="bg-background"
          textColor="text-[var(--foreground)]"
        />
        <ColorSwatch
          name="Foreground"
          bgColor="bg-foreground"
          textColor="text-background"
        />

        {/* رنگ‌های کارت */}
        <ColorSwatch
          name="Card Background"
          bgColor="bg-card-background"
          textColor="text-card-foreground"
        />

        {/* رنگ‌های تعاملی */}
        <ColorSwatch
          name="Primary"
          bgColor="bg-primary"
          textColor="text-primary-foreground"
        />
        <ColorSwatch
          name="Secondary"
          bgColor="bg-secondary"
          textColor="text-foreground"
        />

        {/* رنگ خط جداکننده */}
        <ColorSwatch
          name="Border"
          bgColor="bg-border"
          textColor="text-foreground"
        />
      </div>

      <div className="mt-8 p-6 bg-card-background rounded-lg transition-colors duration-300">
        <h2 className="text-2xl font-bold text-card-foreground">
          Example Card
        </h2>
        <p className="text-secondary mt-2">
          This is some secondary text on a card. Check if a{" "}
          <a href="#" className="text-primary underline">
            primary link
          </a>{" "}
          looks good here.
        </p>
        <hr className="my-4 border-border" />
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">
          Primary Button
        </button>
      </div>
    </div>
  );
}
