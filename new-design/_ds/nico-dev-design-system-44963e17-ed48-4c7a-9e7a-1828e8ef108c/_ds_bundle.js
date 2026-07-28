/* @ds-bundle: {"format":4,"namespace":"NicoDevDesignSystem_44963e","components":[{"name":"Blob","sourcePath":"components/brand/Blob.jsx"},{"name":"Doodles","sourcePath":"components/brand/Doodles.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EyebrowPill","sourcePath":"components/core/EyebrowPill.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BrowserFrame","sourcePath":"components/surfaces/BrowserFrame.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CodeWindow","sourcePath":"components/surfaces/CodeWindow.jsx"},{"name":"ListRow","sourcePath":"components/surfaces/ListRow.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/brand/Blob.jsx":"5200961ac578","components/brand/Doodles.jsx":"bb5fa38db136","components/core/Badge.jsx":"d4060d7be240","components/core/Button.jsx":"a4b4a1c43497","components/core/EyebrowPill.jsx":"55ee40846d31","components/core/IconButton.jsx":"fda650d4cf5f","components/core/IconTile.jsx":"0a1322df260d","components/core/Wordmark.jsx":"8f1710622a4a","components/forms/Checkbox.jsx":"e00556c9777a","components/forms/Input.jsx":"438b1c871528","components/forms/Radio.jsx":"03ca73aa561a","components/forms/Select.jsx":"267679cf01cb","components/forms/Switch.jsx":"16548033a654","components/surfaces/BrowserFrame.jsx":"496a8e515bc8","components/surfaces/Card.jsx":"bfc72d66bf9c","components/surfaces/CodeWindow.jsx":"ed60374f8b13","components/surfaces/ListRow.jsx":"68f96be635cf","components/surfaces/StatCard.jsx":"29851d1e317e","slides/slides.jsx":"1630e53fdf72","ui_kits/website/Chrome.jsx":"d671559a6ccf","ui_kits/website/HomeScreen.jsx":"52f873e6dddf","ui_kits/website/ProjectsScreen.jsx":"ef408a3cdc5d","ui_kits/website/TalksScreen.jsx":"ae5692e2a521","ui_kits/website/WritingScreen.jsx":"35b32b68c596","ui_kits/website/app.jsx":"245a3e62a44f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NicoDevDesignSystem_44963e = window.NicoDevDesignSystem_44963e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Blob.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Blob({
  children,
  fill = 'var(--brand)',
  size = 420,
  stripes = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--blob)',
      background: stripes ? 'var(--stripes-teal)' : fill,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Blob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Blob.jsx", error: String((e && e.message) || e) }); }

// components/brand/Doodles.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  glyph: '✦',
  top: '8%',
  left: '4%',
  size: 34,
  color: 'var(--pink)',
  anim: 'floaty'
}, {
  glyph: '»',
  top: '70%',
  left: '2%',
  size: 30,
  color: 'var(--peri)',
  anim: 'wobble'
}, {
  shape: 'dot',
  top: '20%',
  left: '92%',
  size: 16,
  color: 'var(--yellow)',
  anim: 'floaty'
}, {
  shape: 'square',
  top: '78%',
  left: '88%',
  size: 26,
  color: 'var(--brand-tint-strong)',
  anim: 'wobble'
}, {
  shape: 'dot',
  top: '54%',
  left: '96%',
  size: 10,
  color: 'var(--brand)',
  anim: 'floaty'
}];
function Doodles({
  items = DEFAULT_ITEMS,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0,
      ...style
    }
  }, rest), items.map((it, i) => {
    const common = {
      position: 'absolute',
      top: it.top,
      left: it.left,
      animation: `${it.anim || 'floaty'} ${5 + i % 3}s ease-in-out infinite`,
      animationDelay: `${i * 0.4}s`
    };
    if (it.shape === 'dot') return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        ...common,
        width: it.size,
        height: it.size,
        borderRadius: 999,
        background: it.color
      }
    });
    if (it.shape === 'square') return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        ...common,
        width: it.size,
        height: it.size,
        borderRadius: it.size * 0.3,
        background: it.color
      }
    });
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        ...common,
        color: it.color,
        fontFamily: 'var(--font-heading)',
        fontWeight: 900,
        fontSize: it.size,
        lineHeight: 1
      }
    }, it.glyph);
  }));
}
Object.assign(__ds_scope, { Doodles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Doodles.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--status-success)'
  },
  running: {
    background: 'var(--status-running-bg)',
    color: 'var(--status-running)'
  },
  warning: {
    background: 'var(--status-warning-bg)',
    color: 'var(--status-warning)'
  },
  neutral: {
    background: 'var(--surface-muted)',
    color: 'var(--muted)'
  },
  peri: {
    background: '#EEEFFC',
    color: 'var(--peri)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  mono = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.8125rem',
      ...TONES[tone],
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'currentColor'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: {
    padding: '18px 40px',
    fontSize: '1.125rem'
  },
  md: {
    padding: '14px 30px',
    fontSize: '1rem'
  },
  sm: {
    padding: '9px 20px',
    fontSize: '0.875rem'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--white)',
    border: '3px solid transparent'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--ink)',
    border: '3px solid var(--ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
    border: '3px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  chevron = false,
  shadow = true,
  shadowColor = 'var(--brand-tint-strong)',
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const Tag = as === 'a' ? 'a' : 'button';
  const base = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 800,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    boxShadow: shadow && variant !== 'ghost' ? `6px 6px 0 ${shadowColor}` : 'none',
    transition: 'transform var(--dur-fast) var(--ease-rise), box-shadow var(--dur-fast) var(--ease-rise), background var(--dur-fast) linear',
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = disabled || !hover ? null : {
    transform: press ? 'translate(2px,2px)' : 'translate(-2px,-2px)',
    boxShadow: shadow && variant !== 'ghost' ? `${press ? 4 : 9}px ${press ? 4 : 9}px 0 ${shadowColor}` : 'none',
    background: variant === 'primary' ? 'var(--brand-deep)' : variant === 'ghost' ? 'var(--brand-tint)' : 'var(--surface-muted)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...hoverStyle
    }
  }, rest), children, chevron ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontWeight: 900
    }
  }, "\xBB") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  teal: {
    background: 'var(--brand-tint)',
    color: 'var(--brand)'
  },
  yellow: {
    background: 'var(--yellow-tint)',
    color: 'var(--yellow-ink)'
  },
  pink: {
    background: 'var(--pink-tint)',
    color: 'var(--pink)'
  },
  ink: {
    background: 'var(--ink)',
    color: 'var(--white)'
  }
};
function EyebrowPill({
  children,
  tone = 'teal',
  size = 'md',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '7px 16px' : '12px 24px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size === 'sm' ? '0.75rem' : 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      padding: pad,
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EyebrowPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowPill.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: 56,
  md: 44,
  sm: 36
};
function IconButton({
  glyph = '»',
  label,
  variant = 'solid',
  size = 'md',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size];
  const looks = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--white)',
      border: '3px solid transparent'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--ink)',
      border: '3px solid var(--ink)'
    },
    tint: {
      background: 'var(--brand-tint)',
      color: 'var(--brand)',
      border: '3px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: d * 0.4,
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-rise)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...looks,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, glyph));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  teal: {
    background: 'var(--brand-tint)',
    color: 'var(--brand)'
  },
  yellow: {
    background: 'var(--yellow-tint)',
    color: 'var(--yellow-ink)'
  },
  pink: {
    background: 'var(--pink-tint)',
    color: 'var(--pink)'
  },
  peri: {
    background: '#EEEFFC',
    color: 'var(--peri)'
  },
  solid: {
    background: 'var(--brand)',
    color: 'var(--white)'
  }
};
function IconTile({
  glyph = '✓',
  tone = 'teal',
  size = 56,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: size > 60 ? 'var(--radius-tile-lg)' : 'var(--radius-tile)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: size * 0.42,
      ...TONES[tone],
      ...style
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 32,
  variant = 'filled',
  style,
  ...rest
}) {
  const outline = variant === 'outline';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: size,
      letterSpacing: '-0.045em',
      lineHeight: 1,
      display: 'inline-block',
      color: variant === 'mono' ? 'currentColor' : 'var(--brand)',
      ...style
    }
  }, rest), "nico", /*#__PURE__*/React.createElement("span", {
    style: outline ? {
      color: 'transparent',
      WebkitTextStroke: `${Math.max(1.5, size * 0.045)}px var(--ink)`
    } : {
      color: variant === 'mono' ? 'currentColor' : 'var(--ink)'
    }
  }, ".dev"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      borderRadius: 9,
      border: '3px solid var(--ink)',
      background: on ? 'var(--brand)' : 'var(--white)',
      color: 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 15,
      transition: 'background var(--dur-fast) linear'
    }
  }, on ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  mono = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--white)',
      border: '3px solid var(--ink)',
      borderRadius: 'var(--radius-input)',
      padding: '14px 18px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: '1rem',
      color: 'var(--ink)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      borderColor: error ? 'var(--pink)' : 'var(--ink)',
      boxShadow: focus ? '4px 4px 0 var(--brand-tint-strong)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-rise)',
      ...style
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: '0.8125rem',
      color: error ? 'var(--pink)' : 'var(--muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      border: '3px solid var(--ink)',
      background: 'var(--white)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: checked ? 'var(--brand)' : 'transparent',
      transition: 'background var(--dur-fast) linear'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--white)',
      border: '3px solid var(--ink)',
      borderRadius: 'var(--radius-input)',
      padding: '14px 18px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: '1rem',
      color: 'var(--ink)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      paddingRight: 46,
      cursor: 'pointer',
      boxShadow: focus ? '4px 4px 0 var(--brand-tint-strong)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-rise)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, typeof o === 'string' ? o : o.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%) rotate(90deg)',
      color: 'var(--brand)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      pointerEvents: 'none'
    }
  }, "\xBB")), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: '0.8125rem',
      color: 'var(--muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 62,
      height: 34,
      borderRadius: 999,
      border: '3px solid var(--ink)',
      padding: 0,
      background: on ? 'var(--brand)' : 'var(--surface-muted)',
      position: 'relative',
      cursor: 'inherit',
      transition: 'background var(--dur-fast) linear'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 30 : 2,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: 'var(--white)',
      border: '2px solid var(--ink)',
      boxSizing: 'border-box',
      transition: 'left var(--dur-fast) var(--ease-pop)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/BrowserFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrowserFrame({
  children,
  url = 'nico.dev',
  shadow = 'var(--shadow-hard)',
  style,
  bodyStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '3px solid var(--ink)',
      boxShadow: shadow,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      background: 'var(--surface-muted)',
      borderBottom: '3px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, ['var(--pink)', 'var(--yellow)', 'var(--brand)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--white)',
      border: '1px solid var(--surface-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8125rem',
      color: 'var(--muted)'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: bodyStyle
  }, children));
}
Object.assign(__ds_scope, { BrowserFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/BrowserFrame.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  bordered = true,
  shadow = 'teal',
  radius = 'var(--radius-xl2)',
  padding = 'var(--card-pad)',
  style,
  ...rest
}) {
  const shadows = {
    teal: 'var(--shadow-hard)',
    pink: 'var(--shadow-hard-pink)',
    yellow: 'var(--shadow-hard-yellow)',
    peri: 'var(--shadow-hard-peri)',
    ink: 'var(--shadow-hard-ink)',
    none: 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: radius,
      padding,
      border: bordered ? '3px solid var(--ink)' : '1px solid var(--surface-border)',
      boxShadow: shadows[shadow] || shadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CodeWindow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOKEN_COLORS = {
  key: 'var(--code-key)',
  type: 'var(--code-type)',
  str: 'var(--code-string)',
  fn: 'var(--code-fn)',
  num: 'var(--code-string)',
  punct: 'var(--code-text)',
  text: 'var(--code-text)'
};

/** lines: array of arrays of [kind, text] pairs, or plain strings. */
function CodeWindow({
  filename = 'workflow.ts',
  lines = [],
  shadow = '10px 10px 0 var(--brand)',
  showNumbers = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--code-bg)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: shadow,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 22px',
      background: 'var(--code-chrome)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['var(--pink)', 'var(--yellow)', 'var(--brand)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 13,
      height: 13,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '1rem',
      color: 'var(--faint)'
    }
  }, filename)), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '22px 26px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      color: 'var(--code-text)',
      overflowX: 'auto'
    }
  }, lines.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 20
    }
  }, showNumbers ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-line)',
      minWidth: 22,
      textAlign: 'right',
      userSelect: 'none'
    }
  }, i + 1) : null, /*#__PURE__*/React.createElement("span", null, typeof line === 'string' ? line : line.map(([kind, text], j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      color: TOKEN_COLORS[kind] || TOKEN_COLORS.text
    }
  }, text)))))));
}
Object.assign(__ds_scope, { CodeWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CodeWindow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  children,
  accent = 'var(--brand)',
  lead,
  trailing,
  outlined = true,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: outlined ? 'var(--white)' : 'var(--surface-muted)',
      border: outlined ? '3px solid var(--ink)' : '1px solid var(--surface-border)',
      borderRadius: outlined ? 'var(--radius-pill)' : 'var(--radius-row)',
      padding: outlined ? '16px 26px' : '14px 18px',
      boxShadow: outlined ? `${hover ? 8 : 6}px ${hover ? 8 : 6}px 0 ${accent}` : 'none',
      transform: hover && onClick ? 'translate(-2px,-2px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-rise)',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      ...style
    }
  }, rest), lead, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), trailing);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  label,
  value,
  delta,
  tone = 'teal',
  style,
  ...rest
}) {
  const tones = {
    teal: {
      background: 'var(--brand)',
      color: 'var(--white)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--white)'
    },
    yellow: {
      background: 'var(--yellow)',
      color: 'var(--ink)'
    },
    white: {
      background: 'var(--white)',
      color: 'var(--ink)'
    }
  }[tone];
  const soft = tone === 'yellow' || tone === 'white' ? 'rgba(21,23,28,.6)' : 'rgba(255,255,255,.75)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-6)',
      boxShadow: tone === 'white' ? 'var(--shadow-hard-sm)' : 'none',
      border: tone === 'white' ? '3px solid var(--ink)' : 'none',
      ...tones,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: soft
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '2.25rem',
      letterSpacing: 'var(--ls-heading)',
      marginTop: 4,
      lineHeight: 1
    }
  }, value), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8125rem',
      marginTop: 8,
      color: soft
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// slides/slides.jsx
try { (() => {
const {
  Wordmark,
  EyebrowPill,
  Card,
  StatCard,
  ListRow,
  CodeWindow,
  IconTile,
  Badge,
  Blob,
  Doodles,
  Button
} = window.NicoDevDesignSystem_44963e;
const Slide = ({
  children,
  bg = 'var(--white)',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 1280,
    height: 720,
    background: bg,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'var(--font-sans)',
    ...style
  }
}, children);
const Pad = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '72px 80px',
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
    ...style
  }
}, children);
const Mark = ({
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: 56,
    bottom: 44,
    zIndex: 2
  }
}, /*#__PURE__*/React.createElement(Wordmark, {
  size: 24,
  variant: color === 'light' ? 'mono' : 'filled',
  style: color === 'light' ? {
    color: 'rgba(255,255,255,.8)'
  } : undefined
}));
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(Doodles, {
    items: [{
      glyph: '✦',
      top: '12%',
      left: '78%',
      size: 44,
      color: 'var(--pink)'
    }, {
      shape: 'dot',
      top: '76%',
      left: '70%',
      size: 20,
      color: 'var(--yellow)'
    }, {
      glyph: '»',
      top: '58%',
      left: '6%',
      size: 38,
      color: 'var(--peri)',
      anim: 'wobble'
    }, {
      shape: 'square',
      top: '18%',
      left: '4%',
      size: 30,
      color: 'var(--brand-tint-strong)',
      anim: 'wobble'
    }]
  }), /*#__PURE__*/React.createElement(Pad, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 58%'
    }
  }, /*#__PURE__*/React.createElement(EyebrowPill, null, "Frontend Conference Z\xFCrich"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 78,
      lineHeight: .98,
      letterSpacing: '-.04em',
      margin: '28px 0 20px'
    }
  }, "Look ma,", /*#__PURE__*/React.createElement("br", null), "no ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "hands!")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      maxWidth: 520
    }
  }, "Multimodal AI agents that run entirely in the browser."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 34,
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Nico Martin"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "@nicodotdev"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "02.10.2025"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 380,
      height: 420,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 300,
    style: {
      position: 'absolute',
      bottom: 30,
      left: 40
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/nico-portrait-cutout.png",
    alt: "Nico Martin",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 40,
      height: 400,
      width: 'auto'
    }
  }))), /*#__PURE__*/React.createElement(Mark, null));
}
function SectionSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--brand)"
  }, /*#__PURE__*/React.createElement(Doodles, {
    items: [{
      glyph: '✦',
      top: '14%',
      left: '84%',
      size: 52,
      color: 'rgba(255,255,255,.45)'
    }, {
      shape: 'dot',
      top: '72%',
      left: '10%',
      size: 22,
      color: 'var(--yellow)'
    }, {
      shape: 'square',
      top: '24%',
      left: '8%',
      size: 34,
      color: 'rgba(255,255,255,.3)',
      anim: 'wobble'
    }]
  }), /*#__PURE__*/React.createElement(Pad, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 22,
      color: 'rgba(255,255,255,.7)',
      letterSpacing: '.14em'
    }
  }, "02"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 88,
      letterSpacing: '-.04em',
      lineHeight: 1,
      margin: '18px 0 0'
    }
  }, "Running the", /*#__PURE__*/React.createElement("br", null), "model locally")), /*#__PURE__*/React.createElement(Mark, {
    color: "light"
  }));
}
function ListCodeSlide() {
  const rows = [['Load the model once', 'var(--brand)'], ['Warm it up off the main thread', 'var(--yellow)'], ['Stream tokens to the UI', 'var(--pink)'], ['Cache it for the next visit', 'var(--peri)']];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(Pad, {
    style: {
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 44%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 62,
      letterSpacing: '-.04em',
      margin: '0 0 44px'
    }
  }, "Four steps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, rows.map(([t, a]) => /*#__PURE__*/React.createElement(ListRow, {
    key: t,
    accent: a,
    style: {
      fontSize: 20,
      padding: '18px 30px'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "agent.ts",
    style: {
      width: '100%'
    },
    lines: [[['key', 'import '], ['punct', '{ '], ['fn', 'pipeline'], ['punct', ' } '], ['key', 'from '], ['str', "'@huggingface/transformers'"], ['punct', ';']], [], [['key', 'const '], ['text', 'agent = '], ['key', 'await '], ['fn', 'pipeline'], ['punct', '(']], [['punct', '  '], ['str', "'text-generation'"], ['punct', ',']], [['punct', '  '], ['str', "'onnx-community/Qwen3-0.6B'"], ['punct', ',']], [['punct', '  { '], ['text', 'device: '], ['str', "'webgpu'"], ['punct', ' },']], [['punct', ');']], [], [['key', 'for await '], ['punct', '('], ['key', 'const '], ['text', 'token '], ['key', 'of '], ['fn', 'agent'], ['punct', '(prompt)) {']], [['text', '  ui.'], ['fn', 'append'], ['punct', '(token);']], [['punct', '}']]]
  }))), /*#__PURE__*/React.createElement(Mark, null));
}
function CodeSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--code-bg)",
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "workflow.ts",
    style: {
      width: 940
    },
    lines: [[['key', 'type '], ['type', 'BuildStatus'], ['punct', ' = '], ['str', '"queued"'], ['punct', ' | '], ['str', '"running"'], ['punct', ' | '], ['str', '"passed"'], ['punct', ' | '], ['str', '"failed"'], ['punct', ';']], [], [['key', 'type '], ['type', 'WorkflowRun'], ['punct', ' = {']], [['punct', '  '], ['key', 'id'], ['punct', ': '], ['text', 'string;']], [['punct', '  '], ['key', 'branch'], ['punct', ': '], ['text', 'string;']], [['punct', '  '], ['key', 'status'], ['punct', ': '], ['type', 'BuildStatus'], ['punct', ';']], [['punct', '  '], ['key', 'durationMs'], ['punct', '?: '], ['text', 'number;']], [['punct', '};']], [], [['key', 'function '], ['fn', 'summarizeRun'], ['punct', '('], ['key', 'run'], ['punct', ': '], ['type', 'WorkflowRun'], ['punct', '): '], ['text', 'string {']], [['punct', '  '], ['key', 'const '], ['text', 'duration = run.durationMs ? '], ['type', 'Math'], ['punct', '.'], ['fn', 'round'], ['text', '(run.durationMs / '], ['str', '1000'], ['text', ') + '], ['str', '"s"'], ['text', ' : '], ['str', '"n/a"'], ['punct', ';']], [], [['punct', '  '], ['key', 'return '], ['text', 'run.branch + '], ['str', '": "'], ['text', ' + run.status;']], [['punct', '}']]]
  }), /*#__PURE__*/React.createElement(Mark, {
    color: "light"
  }));
}
function StatsSlide() {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(Doodles, {
    items: [{
      glyph: '✦',
      top: '10%',
      left: '90%',
      size: 34,
      color: 'var(--pink)'
    }, {
      shape: 'dot',
      top: '84%',
      left: '6%',
      size: 16,
      color: 'var(--peri)'
    }]
  }), /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(EyebrowPill, null, "Benchmarks"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 58,
      letterSpacing: '-.04em',
      margin: '24px 0 44px'
    }
  }, "What on-device actually costs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "First token",
    value: "180ms",
    delta: "M2, WebGPU"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "ink",
    label: "Model size",
    value: "0.6B",
    delta: "quantized q4"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "white",
    label: "Data leaving device",
    value: "0 KB",
    delta: "ever"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      marginTop: 28
    }
  }, [['✓', 'teal', 'Private by default'], ['⌁', 'yellow', 'Works offline'], ['»', 'pink', 'No inference bill']].map(([g, t, txt]) => /*#__PURE__*/React.createElement(Card, {
    key: txt,
    shadow: t,
    padding: "24px",
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    glyph: g,
    tone: t,
    size: 52
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 19,
      color: 'var(--ink)'
    }
  }, txt))))), /*#__PURE__*/React.createElement(Mark, null));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--yellow)"
  }, /*#__PURE__*/React.createElement(Doodles, {
    items: [{
      glyph: '✦',
      top: '12%',
      left: '8%',
      size: 40,
      color: 'var(--ink)'
    }, {
      shape: 'dot',
      top: '80%',
      left: '88%',
      size: 22,
      color: 'var(--brand)'
    }]
  }), /*#__PURE__*/React.createElement(Pad, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 62,
      lineHeight: 1.08,
      letterSpacing: '-.03em',
      color: 'var(--ink)',
      maxWidth: 980
    }
  }, "\u201CThe fastest inference is the one that never leaves the device.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/nico-portrait.jpg",
    alt: "",
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      objectFit: 'cover',
      objectPosition: 'top center',
      border: '3px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, "Nico Martin \xB7 nico.dev"))), /*#__PURE__*/React.createElement(Mark, null));
}
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(Doodles, null), /*#__PURE__*/React.createElement(Pad, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-wordmark-transparent.png",
    alt: "nico.dev",
    style: {
      width: 480,
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      maxWidth: 620
    }
  }, "Slides, demos and the full source are online."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    chevron: true
  }, "slides.nico.dev"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    shadowColor: "var(--pink)"
  }, "mail@nico.dev")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 40,
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "/in/nicodotdev"), /*#__PURE__*/React.createElement("span", null, "@nicodotdev"), /*#__PURE__*/React.createElement("span", null, "github.com/nico-martin"))));
}
Object.assign(window, {
  TitleSlide,
  SectionSlide,
  ListCodeSlide,
  CodeSlide,
  StatsSlide,
  QuoteSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Wordmark,
  Button,
  EyebrowPill,
  IconButton,
  Doodles
} = window.NicoDevDesignSystem_44963e;
const NAV = ['Home', 'Talks', 'Writing', 'Projects'];
function SiteHeader({
  page,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--surface-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 84
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      marginLeft: 'auto'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '.9375rem',
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      color: page === n ? 'var(--brand)' : 'var(--body)',
      background: page === n ? 'var(--brand-tint)' : 'transparent'
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    chevron: true,
    as: "a",
    href: "mailto:mail@nico.dev"
  }, "Book a talk")));
}
function SiteFooter() {
  const links = [['nico.dev', 'https://nico.dev'], ['/in/nicodotdev', '#'], ['@nicodotdev', '#'], ['github.com/nico-martin', '#']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--white)',
      marginTop: 96,
      padding: '64px 0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34,
    variant: "mono",
    style: {
      color: 'var(--white)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      color: 'var(--faint)',
      marginTop: 16,
      maxWidth: 380
    }
  }, "Open source ML engineer, Google Developer Expert for Web & AI. Z\xFCrich, Switzerland.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--faint)'
    }
  }, "Elsewhere"), links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '.875rem',
      color: 'var(--white)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--faint)'
    }
  }, "Say hi"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:mail@nico.dev",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.875rem',
      color: 'var(--white)'
    }
  }, "mail@nico.dev"))));
}
function PageHead({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '72px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(Doodles, {
    items: [{
      glyph: '✦',
      top: '18%',
      left: '86%',
      size: 30,
      color: 'var(--pink)'
    }, {
      shape: 'dot',
      top: '62%',
      left: '94%',
      size: 14,
      color: 'var(--yellow)'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(EyebrowPill, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3rem',
      letterSpacing: 'var(--ls-display)',
      margin: '24px 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      maxWidth: 620
    }
  }, lead)));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  PageHead,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  EyebrowPill,
  Card,
  StatCard,
  ListRow,
  BrowserFrame,
  CodeWindow,
  IconTile,
  Badge,
  Blob,
  Doodles
} = window.NicoDevDesignSystem_44963e;
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      paddingTop: 72,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Doodles, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 53%'
    },
    className: "nd-rise"
  }, /*#__PURE__*/React.createElement(EyebrowPill, null, "Hugging Face \xB7 WebML"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '4rem',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      margin: '24px 0 20px'
    }
  }, "Machine learning", /*#__PURE__*/React.createElement("br", null), "that never leaves", /*#__PURE__*/React.createElement("br", null), "the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "browser"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      maxWidth: 520
    }
  }, "I\u2019m Nico \u2014 open source ML engineer at Hugging Face and Google Developer Expert for Web & AI, from Switzerland. I build demos, tools and talks about on-device inference."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    chevron: true,
    onClick: () => onNav('Talks')
  }, "See the talks"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    shadowColor: "var(--yellow)",
    onClick: () => onNav('Projects')
  }, "Browse projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    size: 400,
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/nico-portrait.jpg",
    alt: "Nico Martin",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  })), /*#__PURE__*/React.createElement(StatCard, {
    label: "Talks given",
    value: "60+",
    delta: "7 countries",
    style: {
      position: 'absolute',
      bottom: -12,
      left: -18,
      boxShadow: '8px 8px 0 var(--brand-tint-strong)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 26
    }
  }, [{
    g: '✓',
    t: 'Transformers.js',
    d: 'State-of-the-art models running client-side, no server round-trip.',
    s: 'teal',
    tone: 'teal'
  }, {
    g: '⌁',
    t: 'Web APIs, hands on',
    d: 'Bluetooth, USB, File System Access — the browser talks to hardware.',
    s: 'yellow',
    tone: 'yellow'
  }, {
    g: '»',
    t: 'Talks & workshops',
    d: 'Conference sessions and team workshops across Europe.',
    s: 'pink',
    tone: 'pink'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    shadow: c.s,
    style: {
      animation: 'riseIn .62s var(--ease-rise) both'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    glyph: c.g,
    tone: c.tone,
    size: 62
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '20px 0 8px'
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, c.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 96,
      background: 'var(--yellow)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 46%'
    }
  }, /*#__PURE__*/React.createElement(EyebrowPill, {
    tone: "ink"
  }, "Latest demo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2.5rem',
      margin: '20px 0 14px',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Chat with a PDF, entirely on-device"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink)',
      fontWeight: 300,
      fontSize: 'var(--text-lead)'
    }
  }, "Retrieval augmented generation in the browser: the document never leaves the machine, and neither does the model."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    style: {
      background: 'rgba(21,23,28,.08)',
      color: 'var(--ink)'
    }
  }, "WebGPU"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    style: {
      background: 'rgba(21,23,28,.08)',
      color: 'var(--ink)'
    }
  }, "Transformers.js"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    style: {
      background: 'rgba(21,23,28,.08)',
      color: 'var(--ink)'
    }
  }, "Preact"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "rag.ts",
    shadow: "12px 12px 0 var(--ink)",
    lines: [[['key', 'import '], ['punct', '{ '], ['fn', 'pipeline'], ['punct', ' } '], ['key', 'from '], ['str', "'@huggingface/transformers'"], ['punct', ';']], [], [['key', 'const '], ['text', 'embed = '], ['key', 'await '], ['fn', 'pipeline'], ['punct', '('], ['str', "'feature-extraction'"], ['punct', ');']], [['key', 'const '], ['text', 'chunks = '], ['key', 'await '], ['fn', 'splitPdf'], ['punct', '(file);']], [], [['key', 'for '], ['punct', '('], ['key', 'const '], ['text', 'c '], ['key', 'of '], ['text', 'chunks'], ['punct', ') {']], [['text', '  store.'], ['fn', 'add'], ['punct', '(c, '], ['key', 'await '], ['fn', 'embed'], ['punct', '(c.text));']], [['punct', '}']]]
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement(EyebrowPill, null, "Up next"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2.25rem',
      margin: '20px 0 32px'
    }
  }, "Where you can catch me"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, [['02.10.2025', 'Look ma, no hands! Multimodal AI agents in the browser', 'var(--brand)'], ['16.10.2025', 'Let\'s build K.I.T.T. with JavaScript', 'var(--yellow)'], ['21.11.2025', 'From ML to LLM: on-device AI in the browser', 'var(--pink)']].map(([d, t, a]) => /*#__PURE__*/React.createElement(ListRow, {
    key: t,
    accent: a,
    onClick: () => onNav('Talks'),
    lead: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.875rem',
        color: 'var(--muted)',
        minWidth: 96
      }
    }, d),
    trailing: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 900,
        color: 'var(--brand)'
      }
    }, "\xBB")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.0625rem'
    }
  }, t))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconTile,
  ListRow,
  Switch,
  StatCard
} = window.NicoDevDesignSystem_44963e;
const PROJECTS = [{
  name: 'chat-with-pdf',
  desc: 'RAG + LLM against a PDF, fully in the browser.',
  stack: ['TypeScript', 'Transformers.js'],
  glyph: '✦',
  tone: 'teal',
  live: true
}, {
  name: 'markdown-editor',
  desc: 'File System Access API editor with offline support.',
  stack: ['Preact', 'PWA'],
  glyph: '⌁',
  tone: 'yellow',
  live: true
}, {
  name: 'speedwheels-ble',
  desc: 'A toy car driven over Web Bluetooth from a web app.',
  stack: ['WebBluetooth', 'Arduino'],
  glyph: '»',
  tone: 'pink',
  live: false
}, {
  name: 'pixel-matrix',
  desc: 'Raspberry Pi Pico neopixel matrix fed over WebUSB.',
  stack: ['WebUSB', 'TypeScript'],
  glyph: '✓',
  tone: 'peri',
  live: false
}];
function ProjectsScreen() {
  const [onlyLive, setOnlyLive] = React.useState(false);
  const list = PROJECTS.filter(p => !onlyLive || p.live);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 26,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520
    }
  }, "Whenever I see something exciting, I build a little side project to familiarise myself with the technology."), /*#__PURE__*/React.createElement(Switch, {
    label: "Only live demos",
    checked: onlyLive,
    onChange: setOnlyLive
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 26
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    shadow: p.tone === 'peri' ? 'peri' : p.tone
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    glyph: p.glyph,
    tone: p.tone,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '2px 0 6px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '1.0625rem'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, p.stack.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    mono: true
  }, s)), p.live ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "live demo") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    shadow: false
  }, "Github"), p.live ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    chevron: true
  }, "Demo") : null)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Public repos",
    value: "48",
    delta: "MIT licensed"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "ink",
    label: "Stars",
    value: "3.1k",
    delta: "across all repos"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "white",
    label: "Since",
    value: "2012",
    delta: "writing for the open web"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 44
    }
  }, ['pipeline: build & deploy — passed in 42s', 'lighthouse: performance 100 / a11y 100', 'transformers.js: v3.4.2 published'].map((t, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: t,
    outlined: false,
    lead: /*#__PURE__*/React.createElement(IconTile, {
      glyph: "\u2713",
      tone: i === 2 ? 'peri' : 'teal',
      size: 34
    }),
    trailing: /*#__PURE__*/React.createElement(Badge, {
      tone: i === 2 ? 'running' : 'success',
      dot: true
    }, i === 2 ? 'running' : 'passed')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.875rem',
      color: 'var(--ink)'
    }
  }, t)))));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TalksScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  EyebrowPill,
  Button,
  ListRow,
  IconTile,
  Select,
  BrowserFrame
} = window.NicoDevDesignSystem_44963e;
const TALKS = [{
  date: '02.10.2025',
  title: 'Look ma, no hands! Multimodal AI agents in the browser',
  event: 'Frontend Conference Zürich',
  tag: 'AI',
  accent: 'var(--brand)'
}, {
  date: '16.10.2025',
  title: "Let's build K.I.T.T. with JavaScript",
  event: 'React Paris',
  tag: 'Hardware',
  accent: 'var(--yellow)'
}, {
  date: '21.11.2025',
  title: 'From ML to LLM: on-device AI in the browser',
  event: 'Uphill Conf',
  tag: 'AI',
  accent: 'var(--pink)'
}, {
  date: '08.12.2025',
  title: 'Beyond the browser — how to talk with robots',
  event: 'Voxxed Days',
  tag: 'Hardware',
  accent: 'var(--peri)'
}];
function TalksScreen() {
  const [filter, setFilter] = React.useState('All topics');
  const list = TALKS.filter(t => filter === 'All topics' || t.tag === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520
    }
  }, "Over the past few years I\u2019ve spoken at conferences and meetups across Europe. Always happy about new opportunities."), /*#__PURE__*/React.createElement(Select, {
    label: "Filter",
    options: ['All topics', 'AI', 'Hardware'],
    value: filter,
    onChange: e => setFilter(e.target.value),
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, list.map(t => /*#__PURE__*/React.createElement(ListRow, {
    key: t.title,
    accent: t.accent,
    lead: /*#__PURE__*/React.createElement(IconTile, {
      glyph: "\xBB",
      tone: "teal",
      size: 44
    }),
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      mono: true
    }, t.date), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      shadow: false
    }, "Infos"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.0625rem'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.8125rem',
      color: 'var(--muted)',
      marginTop: 2
    }
  }, t.event)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 30,
      marginTop: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(BrowserFrame, {
    url: "youtube.com/@nicodotdev",
    bodyStyle: {
      background: 'var(--stripes-teal)',
      height: 240
    }
  }), /*#__PURE__*/React.createElement(Card, {
    shadow: "yellow"
  }, /*#__PURE__*/React.createElement(EyebrowPill, {
    size: "sm"
  }, "Booking"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '16px 0 8px'
    }
  }, "Want a session for your team?"), /*#__PURE__*/React.createElement("p", null, "Workshops on WebML, progressive web apps and browser hardware APIs \u2014 half a day to two days."), /*#__PURE__*/React.createElement(Button, {
    chevron: true,
    as: "a",
    href: "mailto:mail@nico.dev"
  }, "mail@nico.dev"))));
}
Object.assign(window, {
  TalksScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TalksScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WritingScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  EyebrowPill,
  Button,
  Input,
  Checkbox
} = window.NicoDevDesignSystem_44963e;
const POSTS = [{
  date: '21.07.2025',
  where: 'LinkedIn',
  title: 'Joining Hugging Face as a WebML engineer',
  lead: 'Why on-device machine learning is the part of the stack I want to spend the next years on.',
  shadow: 'teal'
}, {
  date: '03.05.2020',
  where: 'dev.to',
  title: 'The Share Target API',
  lead: 'Sharing is one of the most time-saving interactions on our phones. Web apps can receive it too.',
  shadow: 'pink'
}, {
  date: '29.04.2020',
  where: 'dev.to',
  title: 'Taking over the system audio player',
  lead: 'The MediaSession API lets a web app own the lock-screen media controls.',
  shadow: 'yellow'
}, {
  date: '26.04.2020',
  where: 'dev.to',
  title: 'A progressive audio player with React hooks',
  lead: 'Building an offline-capable player, one hook at a time.',
  shadow: 'peri'
}];
function WritingScreen() {
  const [subscribed, setSubscribed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 26
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    shadow: p.shadow
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    mono: true
  }, p.date), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "on ", p.where)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px'
    }
  }, p.lead), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "continue \xBB")))), /*#__PURE__*/React.createElement(Card, {
    bordered: true,
    shadow: "none",
    style: {
      marginTop: 48,
      background: 'var(--brand)',
      border: 'none',
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement(EyebrowPill, {
    tone: "ink"
  }, "Newsletter"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--white)',
      margin: '16px 0 6px',
      fontSize: '1.75rem'
    }
  }, "Occasional notes on WebML"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.85)',
      margin: 0
    }
  }, "No cadence promises. Unsubscribe whenever.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      display: 'grid',
      gap: 14
    }
  }, subscribed ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-input)',
      padding: '18px 22px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      color: 'var(--brand)'
    }
  }, "Thanks \u2014 check your inbox \u2713") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@example.com",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--white)'
      }
    }, "Also send slide decks")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    chevron: true,
    shadowColor: "var(--ink)",
    onClick: () => setSubscribed(true)
  }, "Subscribe"))))));
}
Object.assign(window, {
  WritingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WritingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('Home');
  const heads = {
    Talks: ['Speaking', 'Talks & workshops', 'Conference sessions, meetups and team workshops — mostly about running AI where the user already is.'],
    Writing: ['Writing', 'Notes from the open web', 'Articles, posts and the occasional deep dive, published here and elsewhere.'],
    Projects: ['Code', 'Side projects', 'Small, finished things built to learn a new browser capability.']
  };
  const head = heads[page];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    page: page,
    onNav: setPage
  }), head ? /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: head[0],
    title: head[1],
    lead: head[2]
  }) : null, page === 'Home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    onNav: setPage
  }) : null, page === 'Talks' ? /*#__PURE__*/React.createElement(TalksScreen, null) : null, page === 'Writing' ? /*#__PURE__*/React.createElement(WritingScreen, null) : null, page === 'Projects' ? /*#__PURE__*/React.createElement(ProjectsScreen, null) : null, /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Blob = __ds_scope.Blob;

__ds_ns.Doodles = __ds_scope.Doodles;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EyebrowPill = __ds_scope.EyebrowPill;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BrowserFrame = __ds_scope.BrowserFrame;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeWindow = __ds_scope.CodeWindow;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
