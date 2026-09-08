const fs = require('fs')
const path = require('path')

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = dir + '/' + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file))
    } else {
      if (file.endsWith('.tsx')) results.push(file)
    }
  })
  return results
}

const files = walk('./src/components/pages')
files.push('./src/components/navbar.tsx')
files.push('./src/routes/_pages/index.tsx')

files.forEach((f) => {
  if (!fs.existsSync(f)) return
  let content = fs.readFileSync(f, 'utf-8')
  let original = content

  // Upgrading <Button size="lg" to size="xl" if they previously had huge paddings manually applied.
  // Also stripping those huge paddings.
  content = content.replace(/<(Button|Link)([^>]*?)>/g, (match, tag, props) => {
    let newProps = props

    // If it's a huge button historically, upgrade to xl
    if (
      newProps.includes('px-8') ||
      newProps.includes('py-6') ||
      newProps.includes('md:px-8')
    ) {
      newProps = newProps.replace(/size="lg"/, 'size="xl"')
    }

    // Clean out specific padding / sizes that interfere
    const removeRegex =
      /px-[0-9]+\s|py-[0-9]+\s|md:px-[0-9]+\s|md:py-[0-9]+\s|sm:px-[0-9]+\s|sm:py-[0-9]+\s|lg:px-[0-9]+\s|lg:py-[0-9]+\s|text-(xs|sm|base|lg|xl)\s|md:text-(xs|sm|base|lg|xl)\s|sm:text-(xs|sm|base|lg|xl)\s/g

    let newClassName = newProps
    // Do this safely within className="..." sections
    newClassName = newClassName.replace(
      /className=(["']|{`|{")([^"'}]+)(["']|`}|"})/g,
      (cMatch, start, classStr, end) => {
        let cleaned = (' ' + classStr + ' ')
          .replace(removeRegex, ' ')
          .replace(/\s+/g, ' ')
          .trim()
        return `className=${start}${cleaned}${end}`
      },
    )

    // Some attributes fall outside if not wrapped with spaces in regex cleanly
    newClassName = newClassName.replace(
      /className="([^"]*?)(px-6|px-8|py-6|py-4|text-base|text-lg|text-sm|sm:text-lg|sm:text-base|md:text-lg|md:text-xl|md:px-8|md:py-6|sm:px-8|sm:py-6)([^"]*?)"/g,
      (cMatch, p1, badClass, p2) => {
        return `className="${p1.trim()} ${p2.trim()}".trim()`
      },
    )

    // Let's just do a brutal replace of the known offenders inside className="
    const knownOffenders = [
      'px-8',
      'py-6',
      'text-base',
      'sm:text-lg',
      'font-semibold',
      'px-6',
      'py-4',
      'md:px-8',
      'md:py-6',
      'text-sm',
      'sm:text-base',
      'sm:py-6',
      'sm:px-8',
      'px-4',
      'sm:px-6',
      'lg:px-8',
      'py-2',
      'py-3',
    ]

    newClassName = newClassName.replace(
      /className=(['"{`])([^'"}`]*)(['"`}])/g,
      (cM, s, classes, e) => {
        let classList = classes.split(' ')
        classList = classList.filter(
          (c) =>
            !c.includes('px-') &&
            !c.includes('py-') &&
            !(
              c.includes('text-') &&
              !c.includes('text-left') &&
              !c.includes('text-center') &&
              !c.includes('text-right') &&
              !c.includes('text-foreground') &&
              !c.includes('text-muted') &&
              !c.includes('text-white') &&
              !c.includes('text-primary') &&
              !c.includes('text-blue')
            ) &&
            !c.includes('font-semibold'),
        )
        return `className=${s}${classList.join(' ')}${e}`
      },
    )

    return `<${tag}${newProps.replace(props, newClassName)}>`
  })

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8')
    console.log('Processed:', f)
  }
})
