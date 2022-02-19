const getSymbol = (S) => {
  const symbols = {
    a: "\u{1F47E}",
    b: "\u{1F60E}",
    c: "\u{1F63A}",
    d: "\u{1F5E1}",
    e: "\u{1F608}",
    f: "\u{1F97A}",
    g: "\u{1F47B}",
    h: "\u{1F921}",
    i: "\u{1F648}",
    j: "\u{1F649}",
    k: "\u{1F64A}",
    l: "\u{1F60D}",
    m: "\u{1F499}",
    n: "\u{1F49A}",
    o: "\u{1F479}",
    p: "\u{1F49B}",
    q: "\u{1F49C}",
    r: "\u{1F494}",
    s: "\u{1F480}",
    t: "\u{1F996}",
    u: "\u{1F4A6}",
    v: "\u{1F91F}",
    w: "\u{1F441}",
    x: "\u{1F9D9}",
    y: "\u{1F9DA}",
    z: "\u{1F9DB}",
    A: "\u{1F9DE}",
    B: "\u{1F9DF}",
    C: "\u{1F405}",
    D: "\u{1F995}",
    E: "\u{1F984}",
    F: "\u{1F9AC}",
    G: "\u{1F418}",
    H: "\u{1F401}",
    I: "\u{1F987}",
    J: "\u{1F432}",
  };
  if (symbols[S]) {
    return symbols[S];
  } else return S;
};

export default getSymbol;
