import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'
import { pinyin } from 'pinyin'

// Supported language configurations
const languages = {
    eng: {
        path: '/',
        lang: 'en-US',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'English',
        docsDir: ''
    },
    chs: {
        path: '/localization/chs/',
        lang: 'zh-CN',
        title: 'Documentation',
        description: 'Multi-language documentation center',
        selectLanguageName: 'Simplified Chinese',
        docsDir: 'localization/chs'
    },
    cht: {
        path: '/localization/cht/',
        lang: 'zh-TW',
        title: 'Documentation',
        description: 'Multi-language documentation center',
        selectLanguageName: 'Traditional Chinese',
        docsDir: 'localization/cht'
    },
    jap: {
        path: '/localization/jap/',
        lang: 'ja-JP',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Japanese',
        docsDir: 'localization/jap'
    },
    kor: {
        path: '/localization/kor/',
        lang: 'ko-KR',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Korean',
        docsDir: 'localization/kor'
    },
    rus: {
        path: '/localization/rus/',
        lang: 'ru-RU',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Russian',
        docsDir: 'localization/rus'
    },
    spa: {
        path: '/localization/spa/',
        lang: 'es-ES',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Spanish',
        docsDir: 'localization/spa'
    },
    por: {
        path: '/localization/por/',
        lang: 'pt-BR',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Portuguese',
        docsDir: 'localization/por'
    },
    ger: {
        path: '/localization/ger/',
        lang: 'de-DE',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'German',
        docsDir: 'localization/ger'
    },
    fra: {
        path: '/localization/fra/',
        lang: 'fr-FR',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'French',
        docsDir: 'localization/fra'
    },
    pol: {
        path: '/localization/pol/',
        lang: 'pl-PL',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Polish',
        docsDir: 'localization/pol'
    },
    tur: {
        path: '/localization/tur/',
        lang: 'tr-TR',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Turkish',
        docsDir: 'localization/tur'
    },
    ita: {
        path: '/localization/ita/',
        lang: 'it-IT',
        title: 'Documentation',
        description: 'Multi-language documentation',
        selectLanguageName: 'Italian',
        docsDir: 'localization/ita'
    }
}

// Improved Frontmatter parser
function parseFrontmatter(fileContent) {
    const frontmatter = {}

    // Match YAML frontmatter
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n|^= yaml =\s*\n([\s\S]*?)\n---\s*\n|^---yaml\s*\n([\s\S]*?)\n---\s*\n/
    const match = fileContent.match(frontmatterRegex)

    if (match) {
        const yamlContent = match[1] || match[2] || match[3]
        if (yamlContent) {
            const lines = yamlContent.split('\n')

            lines.forEach(line => {
                line = line.trim()
                if (line && !line.startsWith('#')) {
                    const colonIndex = line.indexOf(':')
                    if (colonIndex > -1) {
                        let key = line.slice(0, colonIndex).trim()
                        let value = line.slice(colonIndex + 1).trim()

                        if ((value.startsWith('"') && value.endsWith('"')) ||
                            (value.startsWith("'") && value.endsWith("'"))) {
                            value = value.slice(1, -1)
                        }

                        if (key === 'title') {
                            frontmatter[key] = value
                        }
                    }
                }
            })
        }
    }

    return frontmatter
}

// Read document Frontmatter
function readFrontmatter(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8')
        return parseFrontmatter(content)
    } catch (error) {
        console.warn(`Failed to read frontmatter from ${filePath}:`, error.message)
        return {}
    }
}

// Generate title from filename
function generateTitleFromFilename(filename) {
    return filename
        .replace('.md', '')
        .replace('.markdown', '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
}

// Get Pinyin first character
function getPinyinFirstChar(text) {
    try {
        if (!text || text.length === 0) return '#'

        if (/[\u4e00-\u9fa5]/.test(text.charAt(0))) {
            const pinyinResult = pinyin(text.charAt(0), {
                style: pinyin.STYLE_FIRST_LETTER
            })
            if (pinyinResult && pinyinResult[0] && pinyinResult[0][0]) {
                return pinyinResult[0][0].toUpperCase()
            }
        }

        if (/[a-zA-Z]/.test(text.charAt(0))) {
            return text.charAt(0).toUpperCase()
        }

        return '#'
    } catch (error) {
        console.warn(`Failed to get Pinyin first character: ${text}`, error.message)
        return '#'
    }
}

// Sort by first character
function sortByFirstChar(items) {
    return items.sort((a, b) => {
        const textA = a.text || ''
        const textB = b.text || ''

        const charA = getPinyinFirstChar(textA)
        const charB = getPinyinFirstChar(textB)

        if (charA !== charB) {
            return charA.localeCompare(charB)
        }

        return textA.localeCompare(textB)
    })
}

// Read nested directory configuration
function readNestedDirectoryConfig(dirPath) {
    const configPath = path.join(dirPath, 'nested_directory.json')

    if (!fs.existsSync(configPath)) {
        return {
            namespace: generateTitleFromFilename(path.basename(dirPath)),
            sidebar_position: 9999
        }
    }

    try {
        const configContent = fs.readFileSync(configPath, 'utf8')
        const config = JSON.parse(configContent)

        return {
            namespace: config.namespace || generateTitleFromFilename(path.basename(dirPath)),
            sidebar_position: config.sidebar_position !== undefined ? config.sidebar_position : 9999
        }
    } catch (error) {
        console.warn(`Failed to read ${configPath}:`, error.message)
        return {
            namespace: generateTitleFromFilename(path.basename(dirPath)),
            sidebar_position: 9999
        }
    }
}

// Get all items in directory
function getDirectoryItems(dirPath, lang) {
    const items = {
        files: [],
        dirs: []
    }

    if (!fs.existsSync(dirPath)) {
        return items
    }

    try {
        const entries = fs.readdirSync(dirPath)

        entries.forEach(entry => {
            if (entry === 'nested_directory.json' || entry.startsWith('.') || entry === 'private.config.json') {
                return
            }

            if (lang === 'eng' && entry === 'localization') {
                return
            }

            const entryPath = path.join(dirPath, entry)
            const stat = fs.statSync(entryPath)

            if (stat.isDirectory()) {
                items.dirs.push({
                    name: entry,
                    path: entryPath
                })
            } else if (entry.endsWith('.md') || entry.endsWith('.markdown')) {
                items.files.push({
                    name: entry,
                    path: entryPath
                })
            }
        })
    } catch (error) {
        console.warn(`Error reading directory ${dirPath}:`, error.message)
    }

    return items
}

// Generate sidebar configuration
function generateSidebarConfig(lang) {
    let docsBasePath
    const langConfig = languages[lang]

    if (lang === 'eng') {
        docsBasePath = path.join(process.cwd(), 'docs')
    } else {
        docsBasePath = path.join(process.cwd(), 'docs', langConfig.docsDir)
    }

    if (!fs.existsSync(docsBasePath)) {
        console.warn(`Warning: Language directory ${lang} does not exist at ${docsBasePath}`)
        return []
    }

    const sidebarItems = []

    // 1. Process homepage (README.md or index.md)
    const homeFiles = ['README.md', 'index.md']
    let homeFile = null

    for (const file of homeFiles) {
        const filePath = path.join(docsBasePath, file)
        if (fs.existsSync(filePath)) {
            homeFile = file
            break
        }
    }

    if (homeFile) {
        const homeFilePath = path.join(docsBasePath, homeFile)
        const frontmatter = readFrontmatter(homeFilePath)
        const homeTitle = frontmatter.title || (lang === 'eng' ? 'Home' : 'Homepage')

        sidebarItems.push({
            text: homeTitle,
            link: langConfig.path
        })
    }

    // 2. Get all items in root directory
    const rootItems = getDirectoryItems(docsBasePath, lang)

    // 3. Process files in root directory (single MD documents)
    const fileItems = []

    rootItems.files.forEach(fileInfo => {
        if (homeFile && fileInfo.name === homeFile) {
            return
        }

        const frontmatter = readFrontmatter(fileInfo.path)
        const linkBase = fileInfo.name.replace('.md', '').replace('.markdown', '')

        fileItems.push({
            type: 'file',
            text: frontmatter.title || generateTitleFromFilename(fileInfo.name),
            link: lang === 'eng' ? `/${linkBase}` : `${langConfig.path}${linkBase}`,
            filename: fileInfo.name
        })
    })

    // 4. Process directories in root directory (nested directories)
    const dirItems = []

    rootItems.dirs.forEach(dirInfo => {
        const dirConfig = readNestedDirectoryConfig(dirInfo.path)
        const subItems = getDirectoryItems(dirInfo.path, lang)
        const subHomeFiles = ['README.md', 'index.md']

        let subHomeFile = null

        for (const file of subHomeFiles) {
            const filePath = path.join(dirInfo.path, file)
            if (fs.existsSync(filePath)) {
                subHomeFile = file
                break
            }
        }

        const children = []

        if (subHomeFile) {
            children.push({
                text: dirConfig.namespace,
                link: lang === 'eng' ? `/${dirInfo.name}/` : `${langConfig.path}${dirInfo.name}/`
            })
        }

        subItems.files.forEach(fileInfo => {
            if (subHomeFile && fileInfo.name === subHomeFile) {
                return
            }

            const frontmatter = readFrontmatter(fileInfo.path)
            const linkBase = fileInfo.name.replace('.md', '').replace('.markdown', '')

            children.push({
                type: 'file',
                text: frontmatter.title || generateTitleFromFilename(fileInfo.name),
                link: lang === 'eng' ? `/${dirInfo.name}/${linkBase}` : `${langConfig.path}${dirInfo.name}/${linkBase}`,
                filename: fileInfo.name
            })
        })

        subItems.dirs.forEach(subDirInfo => {
            const subDirConfig = readNestedDirectoryConfig(subDirInfo.path)
            const subDirItems = getDirectoryItems(subDirInfo.path, lang)

            const subDirHomeFiles = ['README.md', 'index.md']
            let subDirHomeFile = null

            for (const file of subDirHomeFiles) {
                const filePath = path.join(subDirInfo.path, file)
                if (fs.existsSync(filePath)) {
                    subDirHomeFile = file
                    break
                }
            }

            const subDirChildren = []

            if (subDirHomeFile) {
                subDirChildren.push({
                    text: subDirConfig.namespace,
                    link: lang === 'eng' ? `/${dirInfo.name}/${subDirInfo.name}/` : `${langConfig.path}${dirInfo.name}/${subDirInfo.name}/`
                })
            }

            subDirItems.files.forEach(fileInfo => {
                if (subDirHomeFile && fileInfo.name === subDirHomeFile) {
                    return
                }

                const frontmatter = readFrontmatter(fileInfo.path)
                const linkBase = fileInfo.name.replace('.md', '').replace('.markdown', '')

                subDirChildren.push({
                    type: 'file',
                    text: frontmatter.title || generateTitleFromFilename(fileInfo.name),
                    link: lang === 'eng' ? `/${dirInfo.name}/${subDirInfo.name}/${linkBase}` : `${langConfig.path}${dirInfo.name}/${subDirInfo.name}/${linkBase}`,
                    filename: fileInfo.name
                })
            })

            if (subDirChildren.length > 0) {
                children.push({
                    text: subDirConfig.namespace,
                    collapsible: true,
                    children: sortByFirstChar(subDirChildren)
                })
            }
        })

        if (children.length > 0) {
            dirItems.push({
                type: 'dir',
                text: dirConfig.namespace,
                collapsible: true,
                children: sortByFirstChar(children),
                name: dirInfo.name
            })
        }
    })

    const sortedFileItems = sortByFirstChar(fileItems)
    const sortedDirItems = sortByFirstChar(dirItems)

    sortedFileItems.forEach(item => {
        sidebarItems.push({
            text: item.text,
            link: item.link
        })
    })

    sortedDirItems.forEach(item => {
        sidebarItems.push({
            text: item.text,
            collapsible: true,
            children: item.children.map(child => ({
                text: child.text,
                link: child.link
            }))
        })
    })

    return sidebarItems
}

// Generate VuePress multi-language configuration
function generateVuePressLocalesConfig() {
    const vuepressLocales = {}

    Object.entries(languages).forEach(([lang, config]) => {
        vuepressLocales[config.path] = {
            lang: config.lang,
            title: config.title,
            description: config.description
        }
    })

    return vuepressLocales
}

// Generate theme multi-language configuration
function generateThemeLocalesConfig() {
    const themeLocales = {}

    Object.entries(languages).forEach(([lang, config]) => {
        let selectLanguageText = 'Languages'

        switch(lang) {
            case 'chs': // Simplified Chinese
                selectLanguageText = 'Language'
                break
            case 'cht': // Traditional Chinese
                selectLanguageText = 'Language'
                break
            case 'jap': // Japanese
                selectLanguageText = 'Language'
                break
            case 'kor': // Korean
                selectLanguageText = 'Language'
                break
            case 'rus': // Russian
                selectLanguageText = 'Languages'
                break
            case 'spa': // Spanish
                selectLanguageText = 'Languages'
                break
            case 'por': // Portuguese
                selectLanguageText = 'Languages'
                break
            case 'ger': // German
                selectLanguageText = 'Languages'
                break
            case 'fra': // French
                selectLanguageText = 'Languages'
                break
            case 'pol': // Polish
                selectLanguageText = 'Languages'
                break
            case 'tur': // Turkish
                selectLanguageText = 'Languages'
                break
            case 'ita': // Italian
                selectLanguageText = 'Languages'
                break
            default: // English and other languages default to English
                selectLanguageText = 'Languages'
        }

        themeLocales[config.path] = {
            selectLanguageName: config.selectLanguageName,
            selectLanguageText: selectLanguageText,
            navbar: [],
            sidebar: generateSidebarConfig(lang),
            backToHome: 'Back to home'
        }
    })

    return themeLocales
}

export default defineUserConfig({
    bundler: viteBundler(),

    locales: generateVuePressLocalesConfig(),

    theme: defaultTheme({
        locales: generateThemeLocalesConfig(),
        logo: '/logo.svg',
        repo: 'https://github.com/GongSunFangYun/TheMusket_Docs',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Select language',
        docsDir: 'docs'
    }),

    head: [
        ['meta', { charset: 'UTF-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ]
})