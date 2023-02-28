import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  useFloating,
  FloatingPortal,
  arrow,
  shift,
  offset,
} from "@floating-ui/react-dom-interactions";
import { motion, AnimatePresence } from "framer-motion";
const NavHeader = () => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [offset(6), shift(), arrow({ element: arrowRef })],
  });
  const showPopover = () => {
    setOpen(true);
  };
  const hidePopover = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-end">
      <div
        className="flex items-center py-1 hover:text-gray-300 cursor-pointer"
        ref={reference}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <span className="mx-1">Tiếng Việt</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <FloatingPortal>
          <AnimatePresence>
            {open && (
              <motion.div
                ref={floating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  width: "max-content",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span
                  ref={arrowRef}
                  className="border-x-transparent border-t-transparent border-b-white border-[11px] absolute translate-y-[-95%] z-10"
                  style={{
                    left: middlewareData.arrow?.x,
                    top: middlewareData.arrow?.y,
                  }}
                ></span>
                <div className="relative rounded-sm border border-gray-200 bg-white shadow-md">
                  <div className="flex flex-col py-2 pr-28 pl-3">
                    <button className="py-2 px-3 text-left hover:text-orange">
                      Tiếng Việt
                    </button>
                    <button className="mt-2 py-2 px-3 text-left hover:text-orange">
                      English
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </div>
      <div className="flex items-center">
        <Link to="/register" className="mx-3 capitalize hover:text-white/70">
          Đăng ký
        </Link>
        <div className="h-4 border-r-[1px] border-r-white/40" />
        <Link to="/login" className="mx-3 capitalize hover:text-white/70">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default NavHeader;
