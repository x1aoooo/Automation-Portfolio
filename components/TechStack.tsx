
import React from 'react';

interface Tool {
  name: string;
  svg: React.ReactNode;
}

/* -------------------- ICONS -------------------- */
const baseIcon = "w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 p-1";

const HTML5Icon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#E34F26] fill-current`}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className={baseIcon}>
    <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
    <path d="M18.674 19.456c.503.012.741.218.78.48.07.456-.403.634-.912.634-.374 0-.772-.092-.931-.197v2.634c.199.081.678.174 1.25.174 2.046 0 3.333-.927 3.333-2.526 0-1.494-.914-2.202-2.38-2.801l-1.024-.406c-.696-.282-1.126-.531-1.126-1.128 0-.582.475-.821 1.087-.821.565 0 1.144.156 1.347.285v-2.62c-.218-.092-.67-.186-1.154-.186-1.935 0-3.13 1.077-3.13 2.535 0 1.374.815 2.122 2.189 2.658l1.025.409zM8.145 23.186c1.191 0 1.856-.39 1.856-.39v-7.144h2.422v7.144c0 2.505-1.524 3.393-3.874 3.393-.584 0-1.19-.074-1.44-.175v-2.489c.188.081.597.165.912.165h.124z" fill="#000"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.232 23 20.463" className={`${baseIcon}`}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#38BDF8] fill-current`}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const N8NIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#EA4B71] fill-current`}>
    <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263z"/>
  </svg>
);

const MakeIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#6F42C1] fill-current`}>
    <path d="M5 2h4v20H5V2zm10 0h4v20h-4V2zm-5 4h4v12h-4V6z"/>
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#FF4F00] fill-current`}>
    <path d="M12 0L3.5 13.5h7.5L9 24l11.5-13.5h-7.5L15 0z" />
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#96BF48] fill-current`}>
    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01z"/>
  </svg>
);

const ElevenLabsIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-white fill-current`}>
    <path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#4E86F8] fill-current`}>
    <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
  </svg>
);

const WEB_STACK: Tool[] = [
  { name: 'HTML5', svg: <HTML5Icon /> },
  { name: 'JavaScript', svg: <JavaScriptIcon /> },
  { name: 'React', svg: <ReactIcon /> },
  { name: 'Tailwind CSS', svg: <TailwindIcon /> },
];

const AUTOMATION_STACK: Tool[] = [
  { name: 'n8n', svg: <N8NIcon /> },
  { name: 'Make', svg: <MakeIcon /> },
  { name: 'Zapier', svg: <ZapierIcon /> },
  { name: 'Shopify', svg: <ShopifyIcon /> },
  { name: 'ElevenLabs', svg: <ElevenLabsIcon /> },
  { name: 'Gemini', svg: <GeminiIcon /> },
];

/* -------------------- STACK GROUP -------------------- */

const StackGroup: React.FC<{
  title: string;
  tools: Tool[];
  reverse?: boolean;
}> = ({ title, tools, reverse = false }) => {
  const animation = reverse ? 'animate-scroll-reverse' : 'animate-scroll';

  return (
    <div className="mb-16 md:mb-20 last:mb-0">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10 text-center">
        <h2 className="text-lg md:text-xl font-medium text-white/80 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative overflow-hidden w-full py-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />

        {/* Track with fixed spacing - Uses 2 identical sets for a seamless -50% loop */}
        <div className={`flex w-max ${animation}`}>
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex flex-col items-center gap-4 px-8 md:px-12 min-w-[140px] md:min-w-[180px] group"
            >
              <div className="flex items-center justify-center">
                {tool.svg}
              </div>

              <span className="text-[10px] md:text-xs font-semibold text-textMuted uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------- MAIN SECTION -------------------- */

export const TechStack: React.FC = () => {
  return (
    <section
      id="stack"
      className="py-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 text-center">
        <p className="text-[10px] md:text-xs font-bold text-textMuted uppercase tracking-[0.3em] mb-4">
          Core Competencies
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Technical Ecosystem
        </h2>
      </div>

      <div className="space-y-4">
        <StackGroup title="Web Development" tools={WEB_STACK} />
        <StackGroup
          title="Automation & Intelligence"
          tools={AUTOMATION_STACK}
          reverse
        />
      </div>
    </section>
  );
};
