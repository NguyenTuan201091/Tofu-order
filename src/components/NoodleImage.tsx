interface NoodleImageProps {
  type: 'soup-noodle' | 'dry-noodle' | 'appetizer' | 'tea';
  className?: string;
}

export default function NoodleImage({ type, className = '' }: NoodleImageProps) {
  if (type === 'soup-noodle') {
    return (
      <svg
        viewBox="0 0 200 160"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="200" height="160" fill="#1a0a00" />
        {/* Steam wisps */}
        <path d="M80 30 Q75 20 80 10 Q85 0 80 -10" stroke="#e8d5b0" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M100 25 Q95 15 100 5 Q105 -5 100 -15" stroke="#e8d5b0" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M120 30 Q115 20 120 10 Q125 0 120 -10" stroke="#e8d5b0" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
        {/* Bowl outer */}
        <ellipse cx="100" cy="110" rx="78" ry="22" fill="#5c2a00" />
        <path d="M22 95 Q30 140 100 148 Q170 140 178 95 Z" fill="#6b3300" />
        {/* Bowl inner (broth) */}
        <ellipse cx="100" cy="95" rx="72" ry="18" fill="#C41E3A" opacity="0.85" />
        {/* Broth surface detail */}
        <ellipse cx="100" cy="95" rx="65" ry="14" fill="#8B0000" opacity="0.6" />
        {/* Chili oil droplets */}
        <circle cx="75" cy="93" r="3" fill="#ff4500" opacity="0.8" />
        <circle cx="125" cy="97" r="2" fill="#ff4500" opacity="0.8" />
        <circle cx="90" cy="98" r="2" fill="#ff6600" opacity="0.7" />
        {/* Noodles */}
        <path d="M45 90 Q60 82 75 90 Q90 98 105 90 Q120 82 135 90 Q150 98 155 90" stroke="#F5DEB3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M50 95 Q65 87 80 95 Q95 103 110 95 Q125 87 140 95 Q150 103 155 97" stroke="#DEB887" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M55 100 Q70 92 85 100 Q100 108 115 100 Q130 92 145 100" stroke="#F5DEB3" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Beef slices */}
        <ellipse cx="85" cy="88" rx="10" ry="5" fill="#4a1a00" transform="rotate(-15 85 88)" />
        <ellipse cx="115" cy="92" rx="9" ry="4" fill="#5c2000" transform="rotate(10 115 92)" />
        {/* Radish slice */}
        <ellipse cx="100" cy="86" rx="7" ry="4" fill="#f0f0f0" opacity="0.9" />
        {/* Green onion */}
        <path d="M70 85 Q72 80 74 85" stroke="#4a7c40" strokeWidth="1.5" fill="none" />
        <path d="M130 88 Q132 83 134 88" stroke="#4a7c40" strokeWidth="1.5" fill="none" />
        {/* Bowl rim highlight */}
        <ellipse cx="100" cy="95" rx="72" ry="18" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.5" />
        {/* Bowl base */}
        <ellipse cx="100" cy="130" rx="30" ry="6" fill="#4a1a00" />
      </svg>
    );
  }

  if (type === 'dry-noodle') {
    return (
      <svg
        viewBox="0 0 200 160"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="200" height="160" fill="#1a0f00" />
        {/* Plate */}
        <ellipse cx="100" cy="118" rx="80" ry="20" fill="#3d1f00" />
        <ellipse cx="100" cy="112" rx="78" ry="18" fill="#4a2800" />
        <ellipse cx="100" cy="108" rx="72" ry="15" fill="#2d1500" />
        {/* Noodle pile */}
        <path d="M45 105 Q60 92 80 100 Q100 108 120 98 Q140 88 155 100" stroke="#DEB887" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M48 110 Q65 97 85 105 Q105 113 125 103 Q145 93 158 105" stroke="#CD853F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 115 Q68 102 88 110 Q108 118 128 108 Q148 98 160 108" stroke="#DEB887" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M55 108 Q72 96 90 103 Q110 110 130 102 Q148 94 158 103" stroke="#F5DEB3" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M52 112 Q70 100 88 107 Q108 115 130 106 Q150 96 160 107" stroke="#CD853F" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Sesame seeds */}
        <circle cx="90" cy="100" r="1.5" fill="#f5f5dc" opacity="0.8" />
        <circle cx="105" cy="96" r="1.5" fill="#f5f5dc" opacity="0.8" />
        <circle cx="115" cy="102" r="1.5" fill="#f5f5dc" opacity="0.8" />
        <circle cx="80" cy="105" r="1.5" fill="#f5f5dc" opacity="0.8" />
        {/* Sauce drizzle */}
        <path d="M75 95 Q90 90 110 98 Q125 104 130 98" stroke="#8B0000" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
        {/* Green cucumber strips */}
        <rect x="82" y="92" width="18" height="3" rx="1.5" fill="#5a8a40" opacity="0.9" transform="rotate(-10 82 92)" />
        <rect x="102" y="96" width="14" height="3" rx="1.5" fill="#5a8a40" opacity="0.9" transform="rotate(5 102 96)" />
        {/* Chili flakes */}
        <circle cx="95" cy="108" r="2" fill="#C41E3A" opacity="0.8" />
        <circle cx="120" cy="104" r="1.5" fill="#C41E3A" opacity="0.8" />
        {/* Plate rim */}
        <ellipse cx="100" cy="108" rx="72" ry="15" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  if (type === 'appetizer') {
    return (
      <svg
        viewBox="0 0 200 160"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="200" height="160" fill="#0f0f00" />
        {/* Plate */}
        <ellipse cx="100" cy="120" rx="75" ry="18" fill="#2a2000" />
        <ellipse cx="100" cy="115" rx="73" ry="16" fill="#1a1500" />
        {/* Dumplings - bottom row */}
        <ellipse cx="68" cy="108" rx="18" ry="12" fill="#F5DEB3" />
        <path d="M50 108 Q68 95 86 108" stroke="#DEB887" strokeWidth="1.5" fill="none" />
        <path d="M55 105 Q68 97 81 105" stroke="#CD853F" strokeWidth="1" fill="none" opacity="0.6" />
        <ellipse cx="100" cy="105" rx="18" ry="12" fill="#F5DEB3" />
        <path d="M82 105 Q100 92 118 105" stroke="#DEB887" strokeWidth="1.5" fill="none" />
        <path d="M87 102 Q100 94 113 102" stroke="#CD853F" strokeWidth="1" fill="none" opacity="0.6" />
        <ellipse cx="132" cy="108" rx="18" ry="12" fill="#F5DEB3" />
        <path d="M114 108 Q132 95 150 108" stroke="#DEB887" strokeWidth="1.5" fill="none" />
        <path d="M119 105 Q132 97 145 105" stroke="#CD853F" strokeWidth="1" fill="none" opacity="0.6" />
        {/* Dumplings - top row */}
        <ellipse cx="84" cy="95" rx="18" ry="12" fill="#eddba0" />
        <path d="M66 95 Q84 82 102 95" stroke="#DEB887" strokeWidth="1.5" fill="none" />
        <ellipse cx="116" cy="95" rx="18" ry="12" fill="#eddba0" />
        <path d="M98 95 Q116 82 134 95" stroke="#DEB887" strokeWidth="1.5" fill="none" />
        {/* Dipping sauce bowl */}
        <ellipse cx="155" cy="108" rx="18" ry="10" fill="#1a0800" />
        <ellipse cx="155" cy="105" rx="16" ry="8" fill="#3d0800" />
        <ellipse cx="155" cy="103" rx="14" ry="6" fill="#8B0000" opacity="0.8" />
        {/* Vinegar ripple */}
        <ellipse cx="155" cy="103" rx="8" ry="3" fill="none" stroke="#C41E3A" strokeWidth="0.8" opacity="0.5" />
        {/* Sesame seeds on dumplings */}
        <circle cx="100" cy="100" r="1.5" fill="#8B6914" opacity="0.7" />
        <circle cx="68" cy="104" r="1.5" fill="#8B6914" opacity="0.7" />
        <circle cx="132" cy="104" r="1.5" fill="#8B6914" opacity="0.7" />
        {/* Plate rim highlight */}
        <ellipse cx="100" cy="115" rx="73" ry="16" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
      </svg>
    );
  }

  // tea
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="200" height="160" fill="#0a0f0a" />
      {/* Steam */}
      <path d="M88 45 Q83 35 88 25 Q93 15 88 5" stroke="#a8c5a0" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M100 40 Q95 30 100 20 Q105 10 100 0" stroke="#a8c5a0" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M112 45 Q107 35 112 25 Q117 15 112 5" stroke="#a8c5a0" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* Saucer */}
      <ellipse cx="100" cy="128" rx="55" ry="10" fill="#2d1f00" />
      <ellipse cx="100" cy="124" rx="52" ry="9" fill="#3d2800" />
      {/* Teacup body */}
      <path d="M60 80 Q55 115 70 122 Q100 130 130 122 Q145 115 140 80 Z" fill="#4a3000" />
      <path d="M62 80 Q58 113 72 120 Q100 128 128 120 Q142 113 138 80 Z" fill="#5c3800" />
      {/* Tea surface */}
      <ellipse cx="100" cy="80" rx="38" ry="12" fill="#2d5a1a" />
      <ellipse cx="100" cy="80" rx="34" ry="10" fill="#3a6e20" opacity="0.8" />
      {/* Tea surface sheen */}
      <ellipse cx="90" cy="78" rx="15" ry="4" fill="#5a9e35" opacity="0.3" />
      {/* Tea leaves floating */}
      <ellipse cx="88" cy="78" rx="4" ry="2" fill="#2d4a10" transform="rotate(-20 88 78)" />
      <ellipse cx="110" cy="82" rx="3" ry="1.5" fill="#2d4a10" transform="rotate(15 110 82)" />
      <ellipse cx="100" cy="75" rx="3" ry="1.5" fill="#2d4a10" transform="rotate(-5 100 75)" />
      {/* Handle */}
      <path d="M140 90 Q158 90 158 105 Q158 118 140 115" stroke="#4a3000" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M140 90 Q155 90 155 105 Q155 115 140 113" stroke="#5c3800" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Cup rim */}
      <ellipse cx="100" cy="80" rx="38" ry="12" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      {/* Gold band decoration */}
      <path d="M62 95 Q100 100 138 95" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Chrysanthemum petal floating */}
      <circle cx="95" cy="79" r="2" fill="#FFD700" opacity="0.6" />
      <circle cx="105" cy="81" r="1.5" fill="#FFD700" opacity="0.5" />
    </svg>
  );
}
