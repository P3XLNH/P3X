# setup_tailwind.py
"""
Dieses Skript installiert Tailwind CSS und richtet die Konfigurationsdateien ein.
Speichere es im Projekt-Root (neben package.json) und führe dann aus:
    python3 setup_tailwind.py
Danach: npm run dev
"""

import os
import subprocess
import sys

# Inhalt der Konfigurationsdateien
TAILWIND_CONFIG = """\
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
"""

POSTCSS_CONFIG = """\
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"""

INDEX_CSS_CONTENT = """\
@tailwind base;
@tailwind components;
@tailwind utilities;
"""

MAIN_JSX_IMPORT = "import './index.css';"

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
        print(f"Fehler bei Befehl: {cmd}")
        sys.exit(result.returncode)

def write_file(path, content):
    # Only create directory if needed
    dirpath = os.path.dirname(path)
    if dirpath and not os.path.exists(dirpath):
        os.makedirs(dirpath, exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f"Erstellt/aktualisiert: {path}")

def ensure_import_in_main():
    for fname in ("src/main.jsx", "src/index.jsx"):
        if os.path.exists(fname):
            with open(fname, 'r+') as f:
                lines = f.readlines()
                if MAIN_JSX_IMPORT not in lines[0]:
                    lines.insert(0, MAIN_JSX_IMPORT + "\n")
                    f.seek(0)
                    f.writelines(lines)
            print(f"Import eingefügt in {fname}")
            return
    print("Warnung: Keine main.jsx/index.jsx gefunden.")

def main():
    print("Installiere Tailwind CSS und Abhängigkeiten...")
    run_cmd("npm install --save-dev tailwindcss postcss autoprefixer")

    print("Erstelle Konfigurationsdateien...")
    write_file("tailwind.config.js", TAILWIND_CONFIG)
    write_file("postcss.config.js", POSTCSS_CONFIG)

    print("Erstelle src/index.css...")
    write_file("src/index.css", INDEX_CSS_CONTENT)

    print("Sichere Import in main.jsx/index.jsx...")
    ensure_import_in_main()

    print("\nFertig! Starte jetzt mit: npm run dev")

if __name__ == "__main__":
    main()
