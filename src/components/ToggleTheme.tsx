import { useState } from 'react';
import './ToggleTheme.less';

const ToggleTheme = () => {
  const [mode, setMode] = useState('light');
  const toggleTheme = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    let isDark: boolean;

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains('dark');
      root.classList.remove(isDark ? 'dark' : 'light');
      root.classList.add(isDark ? 'light' : 'dark');
      setMode(mode => mode === 'light' ? 'dark' : 'light');
    });

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        }
      );
    });
  };
  return (
    <div className="dark:bg-blue-100">
      <div>
        <button
          className="
              rounded-md
              border
              p-2
              outline-none
              float-right
              mt-2
              mr-2
              dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-100"
          onClick={toggleTheme}
        >
          {mode === 'light' ? (
            <svg viewBox="0 0 24 24" display="inline-block" height="1.2em" width="1.2em" vertical-align="text-bottom" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM11 1h2v3h-2V1Zm0 19h2v3h-2v-3ZM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93ZM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121Zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121ZM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121ZM23 11v2h-3v-2h3ZM4 11v2H1v-2h3Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" display="inline-block" height="1.2em" width="1.2em" vertical-align="text-bottom" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7Zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12Z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="container w-ful flex  flex-col justify-between bg-white p-4 dark:bg-blue-100">
        <div
          className="
              rounded-lg
              bg-white
              px-6
              py-8
              shadow-xl
              ring-1 ring-slate-900/5
              dark:bg-slate-800
  "
        >
          <div>
            <span
              className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  p-2
                  shadow-lg
      "
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
          </div>
          <h3
            className="
                mt-5
                text-base
                font-medium
                tracking-tight
                text-slate-900
                dark:text-white
    "
          >
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
        <div
          className="
              rounded-lg
              bg-white
              px-6
              py-8
              shadow-xl
              ring-1 ring-slate-900/5
              dark:bg-slate-800
  "
        >
          <div>
            <span
              className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  p-2
                  shadow-lg
      "
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
          </div>
          <h3
            className="
                mt-5
                text-base
                font-medium
                tracking-tight
                text-slate-900
                dark:text-white
    "
          >
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
        <div
          className="
              rounded-lg
              bg-white
              px-6
              py-8
              shadow-xl
              ring-1 ring-slate-900/5
              dark:bg-slate-800
  "
        >
          <div>
            <span
              className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  p-2
                  shadow-lg
      "
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
          </div>
          <h3
            className="
                mt-5
                text-base
                font-medium
                tracking-tight
                text-slate-900
                dark:text-white
    "
          >
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ToggleTheme;
