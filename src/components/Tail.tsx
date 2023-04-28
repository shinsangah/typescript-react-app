import React from "react";

export default function Tail() {
  return (
    <nav className="w-auto pl-10 pr-10 bg-slate-300 ">
      <div className="flex justify-between py-3">
        <ul className="flex gap-16">
          <li className="py-2 flex font-extrabold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
            SANGAH
          </li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu1
          </li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu2
          </li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu3
          </li>
        </ul>
        <a
          href="#"
          className="py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded transition-duration-300"
        >
          Login
        </a>

        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 토글 파트 */}
      <div className="md:hidden py-3">
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  );
}
