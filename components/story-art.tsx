/** Decorative illustrations shared by the catalogue and activity pages. */
export function BoatMark() {
  return (
    <svg viewBox="0 0 100 85" fill="none" aria-hidden="true" focusable="false">
      <path d="M51 10v49" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 15 19 51h27Z" fill="currentColor" opacity=".9" />
      <path d="m56 25 20 26H56Z" fill="currentColor" opacity=".55" />
      <path d="M15 58h70L73 72H31Z" fill="currentColor" />
      <path d="M12 79q10-5 20 0t20 0 20 0 18 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StoryArt({ variant = "lake" }: { variant?: "lake" | "book" }) {
  return (
    <svg className="story-art" viewBox="0 0 600 420" fill="none" aria-hidden="true" focusable="false">
      <rect width="600" height="420" rx="28" fill={variant === "lake" ? "#e8efe6" : "#f6ead5"} />
      <circle cx="431" cy="112" r="57" fill="#edc574" />
      <circle cx="431" cy="112" r="76" stroke="#edc574" strokeOpacity=".4" />
      <path d="M0 242Q105 105 241 231 420 86 600 218V420H0Z" fill="#b5c5a9" />
      <path d="M0 272Q144 190 296 267 466 163 600 260V420H0Z" fill="#809e8f" />
      <path d="M0 287Q150 255 300 288T600 277V420H0Z" fill="#80b5bb" />
      <path d="M0 335Q150 302 300 335T600 324V420H0Z" fill="#56969f" />
      <path d="M0 386Q150 349 300 382T600 371V420H0Z" fill="#377b88" />
      <g stroke="#fff8e8" strokeWidth="3" strokeLinecap="round" opacity=".55">
        <path d="M49 315h65m324-12h64M104 374h77m234-19h58M224 398h79" />
      </g>
      <g stroke="#486b66" strokeWidth="3" strokeLinecap="round">
        <path d="M91 112q12-13 24 0 12-13 24 0M176 79q8-9 16 0 8-9 16 0" />
      </g>
      {variant === "lake" ? (
        <g>
          <path d="M297 112v188" stroke="#6f543e" strokeWidth="7" strokeLinecap="round" />
          <path d="M284 125Q238 189 196 250h88Z" fill="#fff9e8" />
          <path d="M308 157v93h76Z" fill="#f3d48c" />
          <path d="m284 125-11 125h11Z" fill="#e9e0c9" />
          <path d="M190 280q108 13 209-7l-32 45q-78 23-147-3Z" fill="#9b6145" />
          <path d="M191 280q106 16 208-7" stroke="#d49c66" strokeWidth="8" strokeLinecap="round" />
          <path d="m238 309 10-20m92 21-7-23" stroke="#794b37" strokeWidth="3" />
          <path d="M260 333q40 9 79-1" stroke="#d5e7dd" strokeWidth="3" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <path d="m135 176 159 17 168-17 11 147-176 29-172-30Z" fill="#9c634b" />
          <path d="M145 161q74-21 152 25 80-46 155-25v149q-77-17-155 23-78-40-152-23Z" fill="#fff9e9" />
          <path d="M297 186v147" stroke="#dfccab" strokeWidth="3" />
          <path d="M162 180q61-12 116 16v113q-64-28-116-15Z" fill="#eee6cf" />
          <path d="M174 257q40-39 91-10v35h-91Z" fill="#a1b99d" />
          <circle cx="239" cy="213" r="15" fill="#dfb566" />
          <g stroke="#c9b895" strokeWidth="4" strokeLinecap="round">
            <path d="m320 210 104-23m-104 45 104-20m-104 44 86-17m-86 41 96-18" />
          </g>
          <path d="M356 175v66l15-14 15 7v-68" fill="#bb7756" />
        </g>
      )}
      <g stroke="#345e53" strokeWidth="4" strokeLinecap="round">
        <path d="M30 420q32-64 21-123M554 420q-28-48-16-94" />
      </g>
      <g fill="#527e66">
        <ellipse cx="42" cy="330" rx="9" ry="22" transform="rotate(-36 42 330)" />
        <ellipse cx="63" cy="351" rx="9" ry="22" transform="rotate(42 63 351)" />
        <ellipse cx="30" cy="377" rx="10" ry="24" transform="rotate(-40 30 377)" />
        <ellipse cx="532" cy="362" rx="9" ry="23" transform="rotate(-38 532 362)" />
        <ellipse cx="555" cy="386" rx="9" ry="23" transform="rotate(40 555 386)" />
      </g>
    </svg>
  );
}
