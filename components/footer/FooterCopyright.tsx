export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-10">
      {/* Gold gradient divider */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
      </div>

      {/* Copyright text */}
      <div className="px-6 py-8 text-center">
        <p className="font-sans text-sm text-amber-100/50 tracking-wide">
          © {currentYear} Padharo Sa
        </p>
        <p className="font-sans text-xs text-amber-100/30 mt-1 tracking-wide">
          Crafted with hospitality and tradition. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
