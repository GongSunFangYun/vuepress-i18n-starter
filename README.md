# VuePress Global Framework

**VuePress Global Framework** is an intelligent, out-of-the-box documentation framework built on VuePress that revolutionizes how you create and manage multi-language documentation. It solves the two most painful problems in VuePress documentation: manual sidebar configuration and complex multilingual setup.

## Core Features

### Intelligent Sidebar Sorting
The first VuePress framework to implement **fully automatic sidebar sorting**:
- **Chinese**: Automatically sorted by Pinyin first letter
- **English/Others**: Automatically sorted alphabetically
- No manual maintenance of `sidebar` configuration required

### Zero-Configuration Multilingual Support
Pre-configured for **13 languages** out of the box:
- Ready-to-use language structures, configurations, and routing
- Simply place your `.md` files in the corresponding language directory
- Complete multilingual site **automatically generated**

### Single File = Nested Directory
- Support for intuitive `single-file.md > nested-directory` content organization
- No complex directory structures needed
- Clean and simple content management

### Plug-and-Play Architecture
- Clone the repository
- Place your Markdown files
- Run the server
- Your professional multilingual documentation site is ready in minutes

## Supported Languages
1. **English (eng)** - Root directory
2. **Simplified Chinese (chs)** - `/localization/chs/`
3. **Traditional Chinese (cht)** - `/localization/cht/`
4. **Japanese (jap)** - `/localization/jap/`
5. **Korean (kor)** - `/localization/kor/`
6. **Russian (rus)** - `/localization/rus/`
7. **Spanish (spa)** - `/localization/spa/`
8. **Portuguese (por)** - `/localization/por/`
9. **German (ger)** - `/localization/ger/`
10. **French (fra)** - `/localization/fra/`
11. **Polish (pol)** - `/localization/pol/`
12. **Turkish (tur)** - `/localization/tur/`
13. **Italian (ita)** - `/localization/ita/`

## Usage Examples

### Example 1: Adding Content in Multiple Languages

**English documentation (docs/):**
```
docs/
├── README.md
├── getting-started.md
├── installation.md
└── api-reference.md
```

**Chinese documentation (docs/localization/chs/):**
```
docs/localization/chs/
├── README.md
├── getting-started.md
├── installation.md
└── api-reference.md
```

**Result:** Both language versions automatically appear in their respective sidebars with proper sorting.

### Example 2: Creating Nested Directories

Create a directory with a `nested_directory.json` file:

**docs/advanced/** (English):
```
docs/advanced/
├── nested_directory.json
├── README.md
├── configuration.md
└── customization.md
```

**nested_directory.json:**
```json
{
  "namespace": "Advanced Topics",
  "sidebar_position": 2
}
```

**Result:** "Advanced Topics" appears as a collapsible section in the sidebar, containing all files within, automatically sorted.

### Example 3: Automatic Sorting in Action

**Before sorting (manual file creation order):**
```
Apple.md
香蕉.md
Configuration.md
安装指南.md
Banana.md
```

**After automatic sorting (framework output):**
```
Apple.md
Banana.md
Configuration.md
安装指南.md (Sorted by Pinyin: A)
香蕉.md (Sorted by Pinyin: X)
```

The framework intelligently detects the language of each title and sorts accordingly.

### Example 4: Adding a New Language

To add **Arabic** support:

1. Add to `config.js`:
```javascript
ara: {
    path: '/localization/ara/',
    lang: 'ar-SA',
    title: 'التوثيق',
    description: 'الوثائق متعددة اللغات',
    selectLanguageName: 'العربية',
    docsDir: 'localization/ara'
}
```

2. Create directory: `docs/localization/ara/`
3. Add Arabic `.md` files
4. **Restart the development server** for changes to take effect

## Configuration Examples

### Customizing Directory Display

**nested_directory.json options:**
```json
{
  "namespace": "User Guide",
}
```

### Frontmatter for Custom Titles

In your `.md` files, use frontmatter to set custom display titles:

```yaml
---
title: "Getting Started Quickly"
---

# Content here...
```

If no `title` is specified in frontmatter, the framework generates a title from the filename.

## Important Notes

### Sidebar Not Updating?
If your sidebar doesn't reflect recent changes:

1. **Stop the development server** (Ctrl+C)
2. **Restart the server** with `npm run docs:dev` or `yarn docs:dev`
3. **Refresh your browser**

The sidebar configuration is generated at server startup, so file changes during runtime won't update the sidebar structure until restart.

### File Naming Convention
- Use `.md` or `.markdown` extensions
- Avoid special characters in filenames
- For better sorting, start filenames with clear titles

### Excluded Files
The framework automatically ignores:
- `nested_directory.json` (configuration files)
- `private.config.json` (private configurations)
- Hidden files (starting with `.`)
- Non-Markdown files

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Add your documentation files to the appropriate language directories
4. Run development server: `npm run docs:dev` or `yarn docs:dev`
5. Build for production: `npm run docs:build` or `yarn docs:build`

## License

MIT License

---

**VuePress Global Framework** - Making multilingual documentation simple, smart, and scalable.