import React, { useState, useRef, useEffect } from "react";

export const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  style = {},
  width = "",
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options?.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div
      ref={wrapperRef}
      style={{
        width: width !== "" ? `${width}px` : "100%",
        position: "relative",
        ...style,
      }}
    >
      {/* Khung Select */}
      <div
        onClick={() => !disabled && setOpen((o) => !o)}
        style={{
          border: "1px solid #d9d9d9",
          padding: "6px 10px",
          borderRadius: 6,
          cursor: disabled ? "not-allowed" : "pointer",
          background: disabled ? "#f5f5f5" : "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: value ? "black" : "#999",
          }}
        >
          {selectedLabel}
        </span>
        <span style={{ fontSize: 12, color: "#000" }}>▼</span>
      </div>

      {/* Dropdown Menu */}
      {open && !disabled && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            width: "100%",
            background: "#fff",
            border: "1px solid #d9d9d9",
            borderRadius: 6,
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            zIndex: 1000,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {options?.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              style={{
                padding: "8px 10px",
                cursor: "pointer",
                background: opt.value === value ? "#e6f7ff" : "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  opt.value === value ? "#e6f7ff" : "white")
              }
            >
              <span style={{ color: "#000" }}> {opt.label} </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
